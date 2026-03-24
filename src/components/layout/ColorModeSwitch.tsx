import { Switch, HStack } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { LuSun, LuMoon } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justify="center" gap={6}>
      <LuSun size={20} color={colorMode === "light" ? "var(--chakra-colors-textMain)" : "var(--chakra-colors-textSubtle)"} />
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette="brand"
      >
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
      <LuMoon size={20} color={colorMode === "dark" ? "var(--chakra-colors-textMain)" : "var(--chakra-colors-textSubtle)"} />
    </HStack>
  );
};

export default ColorModeSwitch;
