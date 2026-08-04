import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E0C2FF",
    },
    secondary: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
    },
  },

  typography: {
    h4: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },

    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },

    caption: {
      fontSize: "0.75rem",
      fontWeight: 300,
    },
  },
});

export default theme;