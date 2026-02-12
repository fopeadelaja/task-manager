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
import { useState } from "react";
import { platformLaunchBoard } from "../../types/kanban";

interface TaskFormValues {
  title: string;
  description: string;
  subtasks: { title: string }[];
  status: string;
}

const AddNewTask = () => {
  const [subtasks, setSubtasks] = useState<{ title: string }[]>([
    { title: "" },
    { title: "" },
  ]);

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { title: "" }]);
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index].title = value;
    setSubtasks(newSubtasks);
  };

  const handleDeleteSubtask = (index: number) => {
    setSubtasks(subtasks.filter((_, i) => i !== index));
  };

  const columnsCollection = createListCollection({
    items: platformLaunchBoard
      .flatMap((board) => board.status)
      .map((column) => ({ label: column.title, value: column.id })),
  });
  return (
    <Dialog.Root
      size="sm"
      placement="center"
      motionPreset="slide-in-bottom"
      closeOnInteractOutside={true}
    >
      <Dialog.Trigger asChild>
        <Button borderRadius="25px" bg="primary" color="white" px={8} py={6} fontSize="md">
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
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              <VStack align="stretch" gap={6}>
                <VStack align="stretch" gap={2}>
                  <Text fontSize="xs" fontWeight="bold" color="textMain">
                    Title
                  </Text>
                  <Input
                    placeholder="e.g. Take coffee break"
                    bg="transparent"
                    borderColor="rgba(130, 143, 163, 0.25)"
                    _hover={{ borderColor: "primary" }}
                    _focus={{ borderColor: "primary" }}
                  />
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
                  />
                </VStack>

                <VStack align="stretch" gap={2}>
                  <Text fontSize="xs" fontWeight="bold" color="textMain">
                    Subtasks
                  </Text>
                  <VStack width="100%" gap={3}>
                    {subtasks.map((subtask, index) => (
                      <HStack key={index} w="100%">
                        <Input
                          value={subtask.title}
                          onChange={(e) =>
                            handleSubtaskChange(index, e.target.value)
                          }
                          placeholder={
                            index === 0
                              ? "e.g. Make coffee"
                              : "e.g. Drink coffee & smile"
                          }
                          bg="transparent"
                          borderColor="rgba(130, 143, 163, 0.25)"
                          _hover={{ borderColor: "primary" }}
                          _focus={{ borderColor: "primary" }}
                        />
                        <CloseButton
                          onClick={() => handleDeleteSubtask(index)}
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
                      onClick={handleAddSubtask}
                      fontSize="sm"
                      fontWeight="bold"
                      _hover={{ bg: "rgba(99, 95, 199, 0.25)" }}
                    >
                      + Add New Subtask
                    </Button>
                  </VStack>
                </VStack>

                <VStack align="stretch" gap={2}>
                  <Text fontSize="xs" fontWeight="bold" color="textMain">
                    Status
                  </Text>
                  <Select.Root
                    collection={columnsCollection}
                    positioning={{ sameWidth: true }}
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
                              _hover={{ bg: "gray.700", color: "primary" }}
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
                </VStack>

                <Button
                  borderRadius="20px"
                  w="100%"
                  bg="primary"
                  color="white"
                  fontSize="sm"
                  fontWeight="bold"
                  _hover={{ bg: "primaryAlpha.800" }}
                >
                  Create Task
                </Button>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddNewTask;
