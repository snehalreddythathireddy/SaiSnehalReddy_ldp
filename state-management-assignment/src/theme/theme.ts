import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#224DFF",
      light: "#EFF2FF",
    },

    secondary: {
      main: "#667085",
    },

    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#2C2C2E",
      secondary: "#696A6E",
    },

    divider: "#E5E7ED",

    success: {
      main: "#12B76A",
      light: "#ECFDF3",
    },

    warning: {
      main: "#B54708",
      light: "#FFFAEB",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
    },

    h5: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
    },

    h6: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },

    caption: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      textTransform: "uppercase",
      color: "#696A6E",
    },
  },

  shape: {
    borderRadius: 6,
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },

      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
          padding: "8px 16px",
          fontWeight: 500,
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 36,
          borderRadius: 6,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E5E7ED",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D0D5DD",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#224DFF",
          },
        },

        input: {
          padding: "8px 12px",
          fontSize: "14px",

          "&::placeholder": {
            color: "#667085",
            opacity: 1,
          },
        },
      },
    },

    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },

      styleOverrides: {
        root: {
          width: 24,
          height: 24,
          padding: 0,
          color: "#D0D5DD",

          "&.Mui-checked": {
            color: "#224DFF",
          },

          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
        },
      },
    },

    MuiIconButton: {
      defaultProps: {
        size: "small",
      },

      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: "0px 4px 28px rgba(45,45,47,0.1)",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "11px 16px",
          borderBottom: "1px solid #E5E7ED",
        },

        head: {
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "18px",
          textTransform: "uppercase",
          color: "#696A6E",
          backgroundColor: "#F9FAFB",
        },

        body: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          color: "#344054",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 26,
          fontSize: "12px",
          fontWeight: 500,
          padding: "4px 12px",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E5E7ED",
        },
      },
    },
  },
});

export default theme;