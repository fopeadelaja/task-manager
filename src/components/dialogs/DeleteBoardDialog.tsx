import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Portal,
  VStack,
  Text,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
  boardName?: string;
}

const DeleteBoardDialog = ({
  isOpen,
  onDelete,
  onClose,
  boardName = "this board",
}: Props) => {
  return (
    <Dialog.Root
      size="sm"
      placement="center"
      motionPreset="slide-in-bottom"
      closeOnInteractOutside={true}
      open={isOpen}
    >
      {" "}
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content
            bg="cardBg"
            color="textMain"
            borderRadius="md"
            p={6}
            maxW="md"
          >
            <Dialog.Header mb={4}>
              <Dialog.Title fontSize="xl" fontWeight="bold" color="destructive">
                Delete this board?
              </Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              <VStack align="stretch" gap={6}>
                <Text color="textSubtle" fontSize="sm">
                  Are you sure you want to delete the '{boardName}' board? This
                  action will remove all columns and tasks and cannot be
                  reversed.
                </Text>

                <HStack w="100%">
                  <Button
                    borderRadius="20px"
                    bg="buttonSecondary"
                    w="50%"
                    color="primary"
                    onClick={onDelete}
                    fontSize="sm"
                    fontWeight="bold"
                    _hover={{ bg: "rgba(99, 95, 199, 0.25)" }}
                  >
                    Delete
                  </Button>

                  <Button
                    borderRadius="20px"
                    bg="primary"
                    w="50%"
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    _hover={{ bg: "primaryAlpha.800" }}
                    onClick={onClose}
                  >
                    Close
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
