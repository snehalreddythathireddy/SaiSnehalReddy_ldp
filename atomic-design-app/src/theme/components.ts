import { Components } from "@mui/material/styles";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#19181C",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        border: "1px solid #2D2D30",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: "none",
        height: 48,
        fontWeight: 600,
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 6,
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: "1px solid #2D2D30",
      },
      head: {
        fontWeight: 600,
      },
    },
  },

  MuiSlider: {
    styleOverrides: {
      thumb: {
        width: 23,
        height: 23,
        borderRadius: 8,
        backgroundColor: "#6C5DD3",
        border: "3px solid #B4A9FF",
        boxShadow: "0px 4px 4px 0px rgba(16, 12, 46, 0.6)",
        "&:before": {
          display: "none",
        },
        "&:hover, &.Mui-focusVisible, &.Mui-active": {
          boxShadow: "0px 4px 4px 0px rgba(16, 12, 46, 0.6)",
        },
      },
      rail: {
        height: 6,
        opacity: 1,
        backgroundColor: "#2D2D30",
      },
      track: {
        height: 6,
        border: "none",
      },
    },
  },

  MuiPopover: {
    styleOverrides: {
      paper: {
        width: 210,
        borderRadius: 12,
        border: "1px solid #2D2D30",
        backgroundColor: "#201F24",
        padding: 16,
      },
    },
  },
};

export default components;
