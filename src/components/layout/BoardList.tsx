import { Text, HStack } from "@chakra-ui/react";
import { LuPanelsLeftBottom } from "react-icons/lu";
import { useBoard } from "../../context/BoardContext";

const BoardList = () => {
  const { boards, activeBoardId, setActiveBoard } = useBoard();

  return (
    <>
      <Text fontSize="xs" fontWeight="bold" color="textSubtle" ml={10} mb={4} letterSpacing="2.4px">
        ALL BOARDS ({boards.length})
      </Text>
      {boards.map((board) => {
        const isActive = board.id === activeBoardId;
        return (
          <HStack
            key={board.id}
            onClick={() => setActiveBoard(board.id)}
            cursor="pointer"
            bg={isActive ? "primary" : "transparent"}
            color={isActive ? "white" : "textSubtle"}
            py={4}
            pl={10}
            mr={10}
            borderRightRadius="full"
            transition="all 0.2s"
            _hover={!isActive ? { bg: "buttonSecondary", color: "primary" } : {}}
          >
            <LuPanelsLeftBottom />
            <Text fontWeight="bold" fontSize="md">
              {board.title}
            </Text>
          </HStack>
        );
      })}
    </>
  );
};

export default BoardList;
