import { type Column } from "../../types/kanban";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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

const Board = () => {
  return (
    <Flex direction="row" gap={6} justifyContent="space-evenly">
      {columnsData.map((column) => (
        <Box key={column.id}>
          <Heading size="md" mb={4}>
            {column.title}
          </Heading>

          <Flex direction="column" gap={3}>
            {column.tasks.map((task) => (
              <Box key={task.id} p={3}>
                <Text>{task.title}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Board;
