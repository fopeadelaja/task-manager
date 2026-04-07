import type { Task } from "@/types/kanban";
import { Checkbox, Dialog, Flex, Portal, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  task: Task | null;
  onClose: () => void;
}

const EditTask = ({ isOpen, task, onClose }: Props) => {
  const [completedSubtasks, setCompletedSubtasks] = useState<number[]>([]);

  useEffect(() => {
    // Reset completed subtasks when modal opens/closes or task changes
    if (isOpen) {
      setCompletedSubtasks([]);
    }
  }, [isOpen, task]);

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
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default EditTask;