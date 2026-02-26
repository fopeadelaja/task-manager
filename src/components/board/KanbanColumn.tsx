import { useBoard } from "../../context/BoardContext";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

const KanbanColumn = () => {
  const { activeBoard } = useBoard();

  if (!activeBoard) return null;

  return (
    <Flex direction="row" gap={6} align="flex-start">
      {activeBoard.status.map((column) => (
        <Box key={column.id} margin={6} p={3}>
          <Heading size="md" mb={4}>
            {column.title} ({column.tasks.length})
          </Heading>
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Box>
      ))}
    </Flex>
  );
};

export default KanbanColumn;
