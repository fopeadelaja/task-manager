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
        borderRadius="20px"
        padding={3}
        boxShadow="sm"
        key={task.id}
        w="400px"
      >
        <Card.Body>
          <Text alignContent={"flex-start"}>{task.title}</Text>
        </Card.Body>
        <Card.Footer>
          {task.subtasks ? (
            <Text color="textSubtle">{task.subtasks?.length} Subtasks</Text>
          ) : null}
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

export default TaskCard;
