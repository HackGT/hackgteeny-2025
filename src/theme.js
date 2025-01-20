import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/dm-sans'; // 100-900

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Force light mode
    useSystemColorMode: false, // Disable system color mode preference
  },
  fonts: {
    body: "DM Sans Variable, sans-serif",
    heading: "DM Sans Variable, sans-serif",
  },
});

export default theme;
