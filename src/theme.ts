import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#635FC7" },
          400: { value: "#A8A4D8" },
        },
        gray: {
          900: { value: "#000112" },
          800: { value: "#20212C" },
          700: { value: "#2B2C37" },
          600: { value: "#3E3F4E" },
          500: { value: "#828FA3" },
          100: { value: "#E4EBFA" },
          50: { value: "#F4F7FD" },
        },
        red: {
          500: { value: "#EA5555" },
          300: { value: "#FF9898" },
        },
        white: {
          100: { value: "#FFFFFF" },
        },
      },
    },

    semanticTokens: {
      colors: {
        pageBg: {
          value: {
            _light: "{colors.gray.50}",
            _dark: "{colors.gray.800}",
          },
        },
        cardBg: {
          value: {
            _light: "{colors.white}",
            _dark: "{colors.gray.700}",
          },
        },
        textMain: {
          value: {
            _light: "{colors.gray.900}",
            _dark: "{colors.white}",
          },
        },
        textSubtle: {
          value: {
            _light: "{colors.gray.500}",
            _dark: "{colors.gray.500}",
          },
        },
        primary: {
          value: {
            _light: "{colors.brand.500}",
            _dark: "{colors.brand.500}",
          },
        },
        primaryHover: {
          value: {
            _light: "{colors.brand.400}",
            _dark: "{colors.brand.500}",
          },
        },
        destructive: {
          value: {
            _light: "{colors.red.300}",
            _dark: "{colors.red.500}",
          },
        },
      },
    },
  },
});
 
const system = createSystem(defaultConfig, config);

export default system;