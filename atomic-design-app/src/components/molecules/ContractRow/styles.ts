import type { Theme } from "@mui/material/styles";

const styles = {
  row: (checked: boolean) => (theme: Theme) => ({
    backgroundColor: checked
      ? theme.palette.primary.main + "33"
      : "transparent",

    transition: "background-color 0.2s ease",

    "&:hover": {
      backgroundColor: checked
        ? theme.palette.primary.main + "44"
        : theme.palette.action.hover,
    },

    "& td": {
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(2.5),
      paddingBottom: theme.spacing(2.5),
    },
  }),

  primaryText: (theme: Theme) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
  }),

  secondaryText: (theme: Theme) => ({
    color: theme.palette.text.secondary,
  }),
};

export default styles;