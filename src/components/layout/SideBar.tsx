import { Box, Flex, Heading, Image, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/logo.svg";
import BoardList from "./BoardList";
import { platformLaunchBoard } from "../../types/kanban";

const SideBar = () => {
  return (
    <Flex
      width="300px"
      height="100%"
      direction="column"
      bgColor="cardBg"
      color="white"
      borderRightWidth="1px"
      borderRightStyle="solid"
      borderColor="colors.gray.50"
      justifyContent="space-between"
    >
      <Box>
        <HStack padding={10}>
          <Image src={logo} />
          <Heading size="xl">kanban</Heading>
        </HStack>

        <BoardList boards={platformLaunchBoard} />
      </Box>

      <Box alignSelf="center" bg="pageBg" padding={5} m={10}>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default SideBar;
