'use client'
import { createTheme } from "@mui/material";
import { colors } from "./colors";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: colors.black,
      contrastText: colors.white
    },
    secondary: {
      main: colors.white,
      contrastText: colors.black
    },
    accent: {
      main: colors.yellow,
      contrastText: colors.black
    }
  }
});

export default mainTheme;
