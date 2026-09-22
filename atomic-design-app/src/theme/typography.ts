import type { CSSProperties } from "react";
import type { TypographyVariantsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    button2: CSSProperties;
  }
  interface TypographyVariantsOptions {
    button2?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button2: true;
  }
}

const typography: TypographyVariantsOptions = {
  fontFamily: "Gilroy, Inter, sans-serif",

  h1: { fontSize: "36px", lineHeight: "42px", fontWeight: 600 }, // title
  h2: { fontSize: "28px", fontWeight: 600 }, // heading1
  h3: { fontSize: "24px", fontWeight: 600 }, // heading2
  h4: { fontSize: "18px", lineHeight: "150%", fontWeight: 600 }, // heading3

  body1: { fontSize: "16px", lineHeight: "140%", fontWeight: 500 },
  body2: { fontSize: "14px", fontWeight: 400 },

  caption: { fontSize: "12px", fontWeight: 400 },

  button: { fontSize: "16px", lineHeight: "19px", fontWeight: 600, textTransform: "none" }, // button1
  button2: {
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: 600,
    letterSpacing: "1%",
    textTransform: "none",
  },
};

export default typography;