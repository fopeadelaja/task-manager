import { Button, Flex, Text } from "@chakra-ui/react";

const EmptyBoard = () => {
  return (
    <Flex
      flex="1"
      w="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg="pageBg"
      px={6}
    >
      <Text color="textSubtle" textAlign="center" maxW="md">
        You don&apos;t have any boards yet. Create a new board to get started.
      </Text>
      <Button
        borderRadius="25px"
        w="fit-content"
        alignContent="center"
        marginY={5}
        bg="primary"
        color="white"
      >
        +Add New Column
      </Button>
    </Flex>
  );
};

export default EmptyBoard;
