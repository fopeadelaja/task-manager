import { Box, Flex, Heading } from "@chakra-ui/react";
import AddNewTask from "../board/AddNewTask";
import HeaderMenu from "./HeaderMenu";
import { useBoard } from "../../context/BoardContext";

export const BoardHeader = () => {
  const { activeBoard } = useBoard();

  return (
    <Flex
      width="100%"
      height="97px"
      flexDirection="row"
      alignItems="center"
      bg="cardBg"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderColor="colors.gray.50"
      justifyContent="space-between"
    >
      <Heading size="xl" marginLeft={5} color="textMain">
        {activeBoard?.title || "No Board Selected"}
      </Heading>

      <Box marginRight={5}>
        <AddNewTask />
        <HeaderMenu />
      </Box>
    </Flex>
  );
};
