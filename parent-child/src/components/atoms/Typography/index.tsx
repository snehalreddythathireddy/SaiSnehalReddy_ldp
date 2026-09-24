import type { CSSProperties } from "react";

interface TypographyProps {
  text: string;
  variant?: "h1" | "body" | "link" | "label";
  style?: CSSProperties;
}

const Typography = ({ text, variant = "body", style }: TypographyProps) => {
  switch (variant) {
    case "h1":
      return <h1 style={style}>{text}</h1>;

    case "label":
      return <label style={style}>{text}</label>;

    case "link":
      return (
        <a href="#" style={style}>
          {text}
        </a>
      );

    default:
      return <p style={style}>{text}</p>;
  }
};

export default Typography;
