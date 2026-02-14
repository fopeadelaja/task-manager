import { Menu, Button, Icon, Portal } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import DeleteBoardDialog from "../board/DeleteBoardDialog"; // Make sure path is correct

const HeaderMenu = () => {
  const [activeModal, setActiveModal] = useState<"edit" | "delete" | null>(
    null,
  );

  const closeAll = () => setActiveModal(null);

  const handleDelete = () => {
    // TODO: Implement actual delete logic here
    console.log("Deleting board...");
    closeAll();
  };

  return (
    <>
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
              <Menu.Item
                value="edit-board"
                color="textSubtle"
                onClick={() => setActiveModal("edit")}
              >
                Edit Board
              </Menu.Item>
              <Menu.Item
                value="delete-board"
                color="destructive"
                onClick={() => setActiveModal("delete")}
              >
                Delete Board
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <DeleteBoardDialog
        isOpen={activeModal === "delete"}
        onDelete={handleDelete}
        onClose={closeAll}
        boardName="Platform Launch"
      />
    </>
  );
};

export default HeaderMenu;
