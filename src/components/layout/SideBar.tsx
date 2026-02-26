import { Box, Flex, Heading, Image, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/logo.svg";
import BoardList from "./BoardList";
import CreateBoardButton from "./CreateBoardButton";
import { useBoard } from "../../context/BoardContext";

const SideBar = () => {
  const { boards } = useBoard();

  return (
    <Flex
      width="300px"
      height="100%"
      direction="column"
      bgColor="cardBg"
      color="textMain"
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

        <BoardList boards={boards} />
        <CreateBoardButton />
      </Box>

      <Box alignSelf="center" bg="pageBg" padding={5} m={10}>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default SideBar;
