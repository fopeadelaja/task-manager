import { Button, Flex, Text } from "@chakra-ui/react";

const EmptyBoard = () => {
  return (
    <Flex direction="column" alignItems="center" bg="pageBg">
      <Text color="textSubtle" textAlign="center">
        This board is empty. Create a new column to get started.
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
