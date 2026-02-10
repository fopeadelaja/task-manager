import { type Column } from "../../types/kanban";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

// interface Props {
//   column: Column[];
// }

const columnsData: Column[] = [
  {
    id: "todo",
    title: "TODO",
    tasks: [
      { id: "1", title: "Build UI for onboarding flow" },
      { id: "2", title: "Build UI for search" },
    ],
  },
  {
    id: "doing",
    title: "DOING",
    tasks: [{ id: "3", title: "Design onboarding flow" }],
  },
  {
    id: "done",
    title: "DONE",
    tasks: [{ id: "4", title: "Conduct wireframe tests" }],
  },
];

const KanbanColumn = () => {
  return (
    <Flex direction="row" gap={6} align="flex-start">
      {columnsData.map((column) => (
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
