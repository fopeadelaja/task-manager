import { Flex, Heading, Text } from "@chakra-ui/react";

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
    >
      <Heading>kanban</Heading>
      <Text color="textSubtle">ALL BOARDS</Text>
    </Flex>
  );
};

export default SideBar;
