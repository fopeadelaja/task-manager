import { Switch } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch.Root
      checked={colorMode === "dark"}
      onCheckedChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
