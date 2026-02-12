import { type Column } from "../../types/kanban";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { platformLaunchBoard } from "../../types/kanban";
// interface Props {
//   column: Column[];
// }

const KanbanColumn = () => {
  return (
    <Flex direction="row" gap={6} align="flex-start">
      {platformLaunchBoard.map((data) =>
        data.status.map((column) => (
          <Box key={column.id} margin={6} p={3}>
            <Heading size="md" mb={4}>
              {column.title} ({column.tasks.length})
            </Heading>
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Box>
        )),
      )}
    </Flex>
  );
};

export default KanbanColumn;
