import {
  Button,
  CloseButton,
  Dialog,
  Input,
  Portal,
  VStack,
  Text,
  Textarea,
  HStack,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import {
  useForm,
  useFieldArray,
  Controller,
  type SubmitHandler,
} from "react-hook-form";
import { Boards } from "../../types/kanban";

interface TaskFormValues {
  title: string;
  description: string;
  subtasks: { title: string }[];
  status: string[];
}

const AddNewTask = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
      subtasks: [{ title: "" }, { title: "" }],
      status: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const onSubmit: SubmitHandler<TaskFormValues> = (data) => {
    console.log("Form Submitted:", data);
    // TODO: Add your logic to save the task here
  };

  const columnsCollection = createListCollection({
    items: Boards.flatMap((board) => board.status).map((column) => ({
      label: column.title,
      value: column.id,
    })),
  });

  return (
    <Dialog.Root
      size="sm"
      placement="center"
      motionPreset="slide-in-bottom"
      closeOnInteractOutside={true}
    >
      <Dialog.Trigger asChild>
        <Button
          borderRadius="25px"
          bg="primary"
          color="white"
          px={8}
          py={6}
          fontSize="md"
        >
          +Add New Task
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content bg="cardBg" color="textMain" borderRadius="md" p={6}>
            <Dialog.Header mb={4}>
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Add New Task
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack align="stretch" gap={6}>
                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Title
                    </Text>
                    <Input
                      placeholder="e.g. Take coffee break"
                      bg="transparent"
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

                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Description
                    </Text>
                    <Textarea
                      placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                      bg="transparent"
                      borderColor="rgba(130, 143, 163, 0.25)"
                      resize="none"
                      rows={4}
                      _hover={{ borderColor: "primary" }}
                      _focus={{ borderColor: "primary" }}
                      {...register("description")}
                    />
                  </VStack>

                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Subtasks
                    </Text>
                    <VStack width="100%" gap={3}>
                      {fields.map((field, index) => (
                        <HStack key={field.id} w="100%">
                          <Input
                            placeholder={
                              index === 0
                                ? "e.g. Make coffee"
                                : "e.g. Drink coffee & smile"
                            }
                            bg="transparent"
                            borderColor={
                              errors.subtasks?.[index]?.title
                                ? "red.500"
                                : "rgba(130, 143, 163, 0.25)"
                            }
                            _hover={{ borderColor: "primary" }}
                            _focus={{ borderColor: "primary" }}
                            {...register(`subtasks.${index}.title` as const, {
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
                        + Add New Subtask
                      </Button>
                    </VStack>
                  </VStack>

                  <VStack align="stretch" gap={2}>
                    <Text fontSize="xs" fontWeight="bold" color="textMain">
                      Status
                    </Text>
                    <Controller
                      name="status"
                      control={control}
                      render={({ field }) => (
                        <Select.Root
                          collection={columnsCollection}
                          positioning={{ sameWidth: true }}
                          value={field.value}
                          onValueChange={(e) => field.onChange(e.value)}
                        >
                          <Select.Control>
                            <Select.Trigger
                              border="1px solid"
                              borderColor="rgba(130, 143, 163, 0.25)"
                              borderRadius="4px"
                              p={2}
                            >
                              <Select.ValueText placeholder="Select status" />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                              <Select.Indicator />
                            </Select.IndicatorGroup>
                          </Select.Control>
                          <Portal>
                            <Select.Positioner>
                              <Select.Content
                                bg="cardBg"
                                borderColor="rgba(130, 143, 163, 0.25)"
                              >
                                {columnsCollection.items.map((column) => (
                                  <Select.Item
                                    item={column}
                                    key={column.value}
                                    _hover={{
                                      bg: "gray.700",
                                      color: "primary",
                                    }}
                                    p={2}
                                  >
                                    {column.label}
                                  </Select.Item>
                                ))}
                              </Select.Content>
                            </Select.Positioner>
                          </Portal>
                          <Select.HiddenSelect />
                        </Select.Root>
                      )}
                    />
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
                    Create Task
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

export default AddNewTask;
