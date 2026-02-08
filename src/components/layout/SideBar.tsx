import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const SideBar = () => {
  return (
    <Flex
      width="300px"
      height="100vh"
      direction="column"
      bgColor="cardBg"
      color="white"
      borderRightWidth="1px"
      borderRightStyle="solid"
      borderColor="colors.gray.50"
      justifyContent="space-between"
    >
      <Box>
        <Heading>kanban</Heading>
        <Text color="textSubtle">ALL BOARDS</Text>
      </Box>

      <Box alignSelf="center" bg="pageBg" padding={5}>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default SideBar;
