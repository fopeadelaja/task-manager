import type { Board } from "@/types/kanban";
import { Text, HStack } from "@chakra-ui/react";
import { LuPanelsLeftBottom } from "react-icons/lu";

interface Props {
  boards: Board[];
}

const BoardList = ({ boards }: Props) => {
  return (
    <>
      {boards.map((board) => (
        <HStack key={board.id} ml={5}>
          <LuPanelsLeftBottom />
          <Text>{board.title}</Text>
        </HStack>
      ))}
    </>
  );
};

export default BoardList;
