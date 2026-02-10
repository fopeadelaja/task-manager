import { Card, Flex, Text } from "@chakra-ui/react";
import { type Task } from "../../types/kanban";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <Flex direction="column" gap={3}>
      <Card.Root
        bg="cardBg"
        variant="subtle"
        mb={5}
        borderRadius="lg"
        padding={3}
        boxShadow="sm"
        key={task.id}
      >
        <Card.Body>
          <Text alignContent={"flex-start"}>{task.title}</Text>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default TaskCard;
