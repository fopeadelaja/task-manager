import { Box, Flex, Heading } from "@chakra-ui/react";
import AddNewTask from "../board/AddNewTask";
import HeaderMenu from "./HeaderMenu";

export const BoardHeader = () => {
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
      <Heading size="xl" marginLeft={5}>
        Platform Launch
      </Heading>

      <Box marginRight={5}>
        <AddNewTask />
        <HeaderMenu />
      </Box>
    </Flex>
  );
};
