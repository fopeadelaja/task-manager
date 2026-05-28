import {
  Dialog as ChakraDialog,
  Portal,
  type Dialog as DialogNamespace,
} from "@chakra-ui/react"
import * as React from "react"

export interface AppDialogProps
  extends Omit<ChakraDialog.RootProps, "children"> {
  title: React.ReactNode
  titleProps?: DialogNamespace.TitleProps
  contentProps?: DialogNamespace.ContentProps
  children: React.ReactNode
  trigger?: React.ReactNode
  open?: boolean
  onClose?: () => void
  portalled?: boolean
}

export const AppDialog = (props: AppDialogProps) => {
  const {
    title,
    titleProps,
    contentProps,
    children,
    trigger,
    open,
    onClose,
    portalled = true,
    size = "sm",
    placement = "center",
    motionPreset = "slide-in-bottom",
    closeOnInteractOutside = true,
    onOpenChange,
    ...rest
  } = props

  const handleOpenChange: ChakraDialog.RootProps["onOpenChange"] = (details) => {
    onOpenChange?.(details)
    if (!details.open) {
      onClose?.()
    }
  }

  return (
    <ChakraDialog.Root
      size={size}
      placement={placement}
      motionPreset={motionPreset}
      closeOnInteractOutside={closeOnInteractOutside}
      open={open}
      onOpenChange={handleOpenChange}
      {...rest}
    >
      {trigger && (
        <ChakraDialog.Trigger asChild>{trigger}</ChakraDialog.Trigger>
      )}
      <Portal disabled={!portalled}>
        <ChakraDialog.Backdrop bg="blackAlpha.600" />
        <ChakraDialog.Positioner>
          <ChakraDialog.Content
            bg="cardBg"
            color="textMain"
            borderRadius="md"
            p={6}
            {...contentProps}
          >
            <ChakraDialog.Header>
              <ChakraDialog.Title
                fontSize="xl"
                fontWeight="bold"
                {...titleProps}
              >
                {title}
              </ChakraDialog.Title>
            </ChakraDialog.Header>
            <ChakraDialog.Body>{children}</ChakraDialog.Body>
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  )
}
