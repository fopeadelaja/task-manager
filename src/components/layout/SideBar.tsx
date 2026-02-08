import { Box, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/logo.svg";

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
      <HStack padding={10}>
        <Image src={logo} />
        <Heading size="xl">kanban</Heading>
      </HStack>

      <Box alignSelf="center" bg="pageBg" padding={5}>
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
};

export default SideBar;
