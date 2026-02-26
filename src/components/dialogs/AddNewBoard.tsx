import { useForm, useFieldArray } from "react-hook-form";
import {
  CloseButton,
  Dialog,
  Portal,
  VStack,
  Text,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";
import { type CreateBoardFormValues } from "../../types/kanban";
import { useBoard } from "../../context/BoardContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewBoard = ({ isOpen, onClose }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBoardFormValues>({
    defaultValues: {
      title: "",
      columns: [
        {
          title: "",
        },
        {
          title: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  const { createNewBoard } = useBoard();

  const onSubmit = (data: CreateBoardFormValues) => {
    console.log(data);
    createNewBoard(data);
  };

  return (
    <Dialog.Root
      size="sm"
      placement="center"
      motionPreset="slide-in-bottom"
      closeOnInteractOutside={true}
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose()}
    >
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content bg="cardBg" color="textMain" borderRadius="md" p={2}>
            <Dialog.Header>
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Add New Board
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack align="stretch" gap={4}>
                  {/* Board Name */}
                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Board Name
                    </Text>
                    <Input
                      bg="transparent"
                      placeholder="e.g. Web Design"
                      borderColor={
                        errors.title ? "red.500" : "rgba(130, 143, 163, 0.25)"
                      }
                      _hover={{ borderColor: "primary" }}
                      _focus={{ borderColor: "primary" }}
                      {...register("title", { required: "Title is required" })}
                    />
                  </VStack>
                  {/* Board Columns */}
                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Board Columns
                    </Text>
                    {fields.map((field, index) => (
                      <HStack key={field.id}>
                        <Input
                          bg="transparent"
                          borderColor={
                            errors.columns?.[index]?.title
                              ? "red.500"
                              : "rgba(130, 143, 163, 0.25)"
                          }
                          _hover={{ borderColor: "primary" }}
                          _focus={{ borderColor: "primary" }}
                          {...register(`columns.${index}.title` as const, {
                            required: "Can't be empty",
                          })}
                        />
                        <CloseButton
                          onClick={() => remove(index)}
                          color="textSubtle"
                          _hover={{ color: "destructive" }}
                        />
                      </HStack>
                    ))}
                    <Button
                      my={2}
                      borderRadius="20px"
                      w="100%"
                      bg="buttonSecondary"
                      color="primary"
                      onClick={() => append({ title: "" })}
                      fontSize="sm"
                      fontWeight="bold"
                      _hover={{ bg: "rgba(99, 95, 199, 0.25)" }}
                      type="button"
                    >
                      +Add New Column
                    </Button>
                  </VStack>
                  <Button
                    borderRadius="20px"
                    w="100%"
                    bg="primary"
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    _hover={{ bg: "primaryAlpha.800" }}
                    type="submit"
                  >
                    +Create New Board
                  </Button>
                </VStack>
              </form>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddNewBoard;
