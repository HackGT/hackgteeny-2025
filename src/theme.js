import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/dm-sans'; // 100-900
import '@fontsource-variable/syne'; // 400-800
import '@fontsource-variable/outfit'; // 400-700

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Force light mode
    useSystemColorMode: false, // Disable system color mode preference
  },
  fonts: {
    body: "Outfit Variable, DM Sans Variable, sans-serif",
    heading: "Syne Variable, DM Sans Variable, sans-serif",
  },
});

export default theme;
