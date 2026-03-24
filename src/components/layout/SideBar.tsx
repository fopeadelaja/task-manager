import { Box, Flex, Heading, Image, HStack, Text } from "@chakra-ui/react";
import { LuEyeOff } from "react-icons/lu";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/logo.svg";
import BoardList from "./BoardList";
import CreateBoardButton from "./CreateBoardButton";

interface SideBarProps {
  onClose?: () => void;
}

const SideBar = ({ onClose }: SideBarProps) => {
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

        <BoardList />
        <CreateBoardButton />
      </Box>

      <Box px={6} pb={8} w="full">
        <Box bg="pageBg" py={3} borderRadius="md" mb={4}>
          <ColorModeSwitch />
        </Box>
        <HStack
          onClick={onClose}
          color="textSubtle"
          _hover={{ color: "primary", bg: "pageBg" }}
          gap={3}
          px={6}
          py={3}
          w="full"
          borderRadius="r-full"
          ml={-6}
          cursor="pointer"
          // transition="all 0.2s"
        >
          <LuEyeOff size={18} />
          <Text fontWeight="bold">Hide Sidebar</Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default SideBar;
