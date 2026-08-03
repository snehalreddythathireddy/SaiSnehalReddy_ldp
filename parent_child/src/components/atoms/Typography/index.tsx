import theme from "../../../theme/theme";

interface TypographyProps {
  text: string;
  variant?: "h1" | "body" | "link" | "label";
}

const styles = {
  h1: {
    margin: 0,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    lineHeight: theme.typography.h1.lineHeight,
    letterSpacing: theme.typography.h1.letterSpacing,
    color: theme.colors.textPrimary,
  },

  body: {
    margin: 0,
    fontFamily: theme.typography.body.fontFamily,
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
    lineHeight: theme.typography.body.lineHeight,
    letterSpacing: theme.typography.body.letterSpacing,
    color: theme.colors.textSecondary,
  },

  label: {
    margin: 0,
    fontFamily: theme.typography.label.fontFamily,
    fontSize: theme.typography.label.fontSize,
    fontWeight: theme.typography.label.fontWeight,
    lineHeight: theme.typography.label.lineHeight,
    letterSpacing: theme.typography.label.letterSpacing,
    color: theme.colors.textSecondary,
  },

  link: {
    margin: 0,
    fontFamily: theme.typography.link.fontFamily,
    fontSize: theme.typography.link.fontSize,
    fontWeight: theme.typography.link.fontWeight,
    lineHeight: theme.typography.link.lineHeight,
    letterSpacing: theme.typography.link.letterSpacing,
    color: theme.colors.primary,
    textDecoration: "none",
    cursor: "pointer",
  },
};

const Typography = ({
  text,
  variant = "body",
}: TypographyProps) => {
  switch (variant) {
    case "h1":
      return <h1 style={styles.h1}>{text}</h1>;

    case "label":
      return <label style={styles.label}>{text}</label>;

    case "link":
      return (
        <a href="#" style={styles.link}>
          {text}
        </a>
      );

    default:
      return <p style={styles.body}>{text}</p>;
  }
};

export default Typography;