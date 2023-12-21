import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    "default-dark": "#2b3042",
    "navy-blue": "#151a2e",
    gray: {
      100: "#f6f6f7",
      200: "#e5e5e6",
    },
  },
});
