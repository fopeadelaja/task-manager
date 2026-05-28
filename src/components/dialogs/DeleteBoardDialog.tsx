import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { AppDialog } from "../ui/AppDialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  boardName?: string;
}

const DeleteBoardDialog = ({
  isOpen,
  onClose,
  onDelete,
  boardName = "this board",
}: Props) => {
  return (
    <AppDialog
      title="Delete this board?"
      titleProps={{ color: "destructive" }}
      open={isOpen}
      onClose={onClose}
    >
      <VStack align="stretch" gap={6}>
        <Text color="textSubtle" fontSize="sm" lineHeight="tall">
          Are you sure you want to delete the '{boardName}' board? This action
          will remove all columns and tasks and cannot be reversed.
        </Text>

        <HStack gap={4} width="100%">
          <Button
            borderRadius="20px"
            flex={1}
            bg="destructive"
            color="white"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ bg: "red.300" }}
            onClick={onDelete}
          >
            Delete
          </Button>
          <Button
            borderRadius="20px"
            flex={1}
            bg="white"
            color="primary"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ bg: "gray.100" }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </HStack>
      </VStack>
    </AppDialog>
  );
};

export default DeleteBoardDialog;
