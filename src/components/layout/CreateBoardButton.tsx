import { Button } from "@chakra-ui/react";
import AddNewBoard from "../dialogs/AddNewBoard";
import { useState } from "react";

const CreateBoardButton = () => {
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsAddBoardOpen(true)}
        color="primary"
        outline={"none"}
        bgColor="cardBg"
        padding={5}
      >
        + Create New Board
      </Button>

      <AddNewBoard
        isOpen={isAddBoardOpen}
        onClose={() => setIsAddBoardOpen(false)}
      />
    </>
  );
};

export default CreateBoardButton;
