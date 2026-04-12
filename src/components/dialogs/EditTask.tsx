import type { Task } from "@/types/kanban";
import { Checkbox, Dialog, Flex, Portal, Text, Select, createListCollection, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useBoard } from "../../context/BoardContext";

interface Props {
  isOpen: boolean;
  task: Task | null;
  onClose: () => void;
}

const EditTask = ({ isOpen, task, onClose }: Props) => {
  const { activeBoard } = useBoard();
  const currentColumn = activeBoard?.status.find((col) => col.tasks.some((t) => t.id === task?.id));
  
  const [completedSubtasks, setCompletedSubtasks] = useState<number[]>([]);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    // Reset states when modal opens/closes or task changes
    if (isOpen) {
      setCompletedSubtasks([]);
      if (currentColumn) {
        setStatus(currentColumn.id);
      }
    }
  }, [isOpen, task, currentColumn?.id]);

  const columnsCollection = createListCollection({
    items: (activeBoard?.status || []).map((column) => ({
      label: column.title,
      value: column.id,
    })),
  });

  const toggleSubtask = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setCompletedSubtasks((prev) => [...prev, id]);
    } else {
      setCompletedSubtasks((prev) => prev.filter((subId) => subId !== id));
    }
  };

  const completedCount = task?.subtasks?.filter(st => completedSubtasks.includes(st.id)).length || 0;

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
                {task?.title}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text color="gray.400" mb={4}>{task?.description}</Text>
              
            {task?.subtasks && task.subtasks.length > 0 && (
              <>
                <Text fontSize="sm" fontWeight="bold" mb={2}>
                  Subtasks ({completedCount} of {task.subtasks.length})
                </Text>
                <Flex direction="column" gap={2}>
                  {task.subtasks.map((subtask) => {
                      const isChecked = completedSubtasks.includes(subtask.id);
                      return (
                        <Checkbox.Root
                          key={subtask.id}
                          checked={isChecked}
                          onCheckedChange={(e) => toggleSubtask(subtask.id, !!e.checked)}
                          colorPalette="purple"
                          bg="whiteAlpha.100"
                          p={3}
                          borderRadius="md"
                          alignItems="center"
                          _hover={{ bg: "whiteAlpha.200" }}
                          cursor="pointer"
                        >
                          <Checkbox.HiddenInput />
                          <Checkbox.Control />
                          <Checkbox.Label
                            textDecoration={isChecked ? "line-through" : "none"}
                            color={isChecked ? "gray.500" : "textMain"}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {subtask.title}
                          </Checkbox.Label>
                        </Checkbox.Root>
                      );
                  })}
                </Flex>
              </>
            )}

              <VStack align="stretch" gap={2} mt={6}>
                <Text fontSize="xs" fontWeight="bold" color="textMain">
                  Current Status
                </Text>
                <Select.Root
                  collection={columnsCollection}
                  positioning={{ sameWidth: true }}
                  value={status ? [status] : []}
                  onValueChange={(e) => setStatus(e.value[0])}
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
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default EditTask;