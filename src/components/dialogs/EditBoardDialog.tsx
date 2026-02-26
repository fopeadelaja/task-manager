import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Button,
  CloseButton,
  HStack,
  Input,
  Portal,
  VStack,
  Dialog,
  Text,
} from "@chakra-ui/react";
import { type CreateBoardFormValues } from "../../types/kanban";
import { useBoard } from "../../context/BoardContext";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  boardName?: string;
  columns?: { title: string }[];
}

const EditBoardDialog = ({
  isOpen,
  onClose,
}: Props) => {
  const { activeBoard, updateBoard } = useBoard();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateBoardFormValues>({
    defaultValues: {
      title: activeBoard?.title || "",
      columns: activeBoard?.status.map((col) => ({ title: col.title })) || [
        { title: "Todo" },
        { title: "Doing" },
      ],
    },
  });

  // Re-sync form with activeBoard when it opens
useEffect(() => {
    if (isOpen && activeBoard) {
      reset({
        title: activeBoard.title,
        columns: activeBoard.status.map((col) => ({ title: col.title })),
      });
    }
  }, [isOpen, activeBoard, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  const onSubmit = (data: CreateBoardFormValues) => {
    if (activeBoard) {
      updateBoard(activeBoard.id, data);
    }
    onClose();
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
          <Dialog.Content bg="cardBg" color="textMain" borderRadius="md" p={6}>
            <Dialog.Header>
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Edit Board
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack align="stretch" gap={6}>
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
                    {errors.title && (
                      <Text color="red.500" fontSize="xs">
                        {errors.title.message}
                      </Text>
                    )}
                  </VStack>

                  {/* Board Columns */}
                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Board Columns
                    </Text>
                    <VStack width="100%" gap={3}>
                      {fields.map((field, index) => (
                        <HStack key={field.id} w="100%">
                          <Input
                            bg="transparent"
                            placeholder="e.g. Done"
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
                        + Add New Column
                      </Button>
                    </VStack>
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
                    Save Changes
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

export default EditBoardDialog;
