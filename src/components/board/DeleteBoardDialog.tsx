import {
  Button,
  Dialog,
  HStack,
  Text,
  VStack,
  Portal,
} from "@chakra-ui/react";

interface DeleteBoardDialogProps {
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
}: DeleteBoardDialogProps) => {
  return (
    <Dialog.Root
      size="sm"
      placement="center"
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose()}
      closeOnInteractOutside={true}
    >
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content bg="cardBg" color="textMain" borderRadius="md" p={6}>
            <Dialog.Header mb={4}>
              <Dialog.Title fontSize="xl" fontWeight="bold" color="destructive">
                Delete this board?
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack align="stretch" gap={6}>
                <Text color="textSubtle" fontSize="sm" lineHeight="tall">
                  Are you sure you want to delete the '{boardName}' board? This
                  action will remove all columns and tasks and cannot be
                  reversed.
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
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DeleteBoardDialog;
