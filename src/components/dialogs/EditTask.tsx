import { Dialog, Portal } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EditTask = ({ isOpen, onClose }: Props) => {
  return (
    <Dialog.Root
      size="sm"
      placement="center"
      motionPreset="slide-in-bottom"
      closeOnInteractOutside={true}
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose()}
    >
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content bg="cardBg" color="textMain" borderRadius="md" p={6}>
            <Dialog.Header>
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Edit Task
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {/* Form goes here */}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default EditTask;