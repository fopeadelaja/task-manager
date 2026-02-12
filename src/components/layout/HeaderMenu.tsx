import { Menu, Button, Icon, Portal } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const HeaderMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost" size="sm">
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
  );
};

export default HeaderMenu;
