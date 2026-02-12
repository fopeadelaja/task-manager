import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#F4F2FF" },
          100: { value: "#E6E1FF" },
          200: { value: "#CFC7FF" },
          300: { value: "#B7ADFF" },
          400: { value: "#A8A4D8" },
          500: { value: "#635FC7" },
          600: { value: "#514BB3" },
          700: { value: "#3F3A8F" },
          800: { value: "#2D296B" },
          900: { value: "#1C1947" },
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
        buttonSecondary: {
          value: {
            _light: "{colors.gray.50}",
            _dark: "{colors.gray.100}",
          },
        }
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;