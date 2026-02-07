import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

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
        <Button borderRadius="25px" bg="primary" color="white">
          +Add New Task
        </Button>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
              <Icon>
                <BsThreeDotsVertical />
              </Icon>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="edit-board" color="textSubtle">
                  Edit Board
                </Menu.Item>
                <Menu.Item value="delete-board" color="destructive">
                  Delete Board
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </Flex>
  );
};
