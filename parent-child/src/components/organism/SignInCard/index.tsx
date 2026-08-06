import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

import GoogleIcon from "../../../assets/icons/GoogleIcon";
import GithubIcon from "../../../assets/icons/GithubIcon";

import theme from "../../../theme/theme";

const styles = {
  card: {
    width: theme.layout.cardWidth,
    minHeight: theme.layout.cardHeight,
    margin: "40px auto",
    padding: theme.spacing.xl,
    background: theme.colors.white,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadow.card,
    boxSizing: "border-box" as const,
  },

  heading: {
    display: "flex",
    flexDirection: "column" as const,
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: theme.layout.formGap,
  },

  rememberRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },

  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: theme.colors.border,
  },

  dividerText: {
    margin: "0 12px",
  },

  socialButtons: {
    display: "flex",
    flexDirection: "column" as const,
    gap: theme.spacing.sm,
  },

  socialButton: {
    width: "100%",
    height: theme.layout.buttonHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.xs,
    background: theme.colors.white,
    cursor: "pointer",
    fontFamily: theme.typography.body.fontFamily,
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
    lineHeight: theme.typography.body.lineHeight,
    color: theme.colors.textPrimary,
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing.xs,
    marginTop: theme.spacing.md,
  },

  buttonBase: {
    height: theme.layout.buttonHeight,
    borderRadius: theme.radius.xs,
    textTransform: "none" as const,
    boxShadow: "none",
    fontFamily: theme.typography.button.fontFamily,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    lineHeight: theme.typography.button.lineHeight,
    letterSpacing: theme.typography.button.letterSpacing,
    "&:hover": {
      boxShadow: "none",
    },
  },

  buttonPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    "&:hover": {
      backgroundColor: theme.colors.primary,
    },
    "&.Mui-disabled": {
      backgroundColor: theme.colors.primaryDisabled,
      color: theme.colors.white,
    },
  },

  checkboxSx: {
    padding: 0,
    "& .MuiSvgIcon-root": {
      fontSize: 18,
    },
    color: theme.colors.border,
    "&.Mui-checked": {
      color: theme.colors.primary,
    },
    "&.Mui-disabled": {
      color: theme.colors.primaryDisabled,
    },
  },

  checkboxFormControlSx: {
    margin: 0,
    "& .MuiFormControlLabel-label": {
      marginLeft: theme.spacing.sm,
      fontFamily: theme.typography.body.fontFamily,
      fontSize: theme.typography.body.fontSize,
      fontWeight: theme.typography.body.fontWeight,
      lineHeight: theme.typography.body.lineHeight,
      letterSpacing: theme.typography.body.letterSpacing,
      color: theme.colors.textSecondary,
    },
  },

  textFieldContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: theme.spacing.xs,
  },

  textFieldLabel: {
    fontFamily: theme.typography.label.fontFamily,
    fontSize: theme.typography.label.fontSize,
    fontWeight: theme.typography.label.fontWeight,
    lineHeight: theme.typography.label.lineHeight,
    color: theme.colors.textSecondary,
  },

  textFieldSx: {
    "& .MuiOutlinedInput-root": {
      height: theme.layout.inputHeight,
      borderRadius: theme.radius.xs,
      "& fieldset": {
        borderColor: theme.colors.border,
      },
      "&:hover fieldset": {
        borderColor: theme.colors.border,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.colors.primary,
      },
    },
    "& .MuiInputBase-input": {
      padding: "8px 12px",
      fontFamily: theme.typography.input.fontFamily,
      fontSize: theme.typography.input.fontSize,
      fontWeight: theme.typography.input.fontWeight,
      lineHeight: theme.typography.input.lineHeight,
      color: theme.colors.textPrimary,
    },
    "& .MuiInputBase-input::placeholder": {
      color: theme.colors.textSecondary,
      opacity: 1,
    },
  },

  typographyH1: {
    margin: 0,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    lineHeight: theme.typography.h1.lineHeight,
    letterSpacing: theme.typography.h1.letterSpacing,
    color: theme.colors.textPrimary,
  },

  typographyBody: {
    margin: 0,
    fontFamily: theme.typography.body.fontFamily,
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
    lineHeight: theme.typography.body.lineHeight,
    letterSpacing: theme.typography.body.letterSpacing,
    color: theme.colors.textSecondary,
  },

  typographyLink: {
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

const SignInCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>
        <Typography text="Sign in" variant="h1" style={styles.typographyH1} />

        <Typography
          text="Please enter your login credentials"
          variant="body"
          style={styles.typographyBody}
        />
      </div>

      <div style={styles.form}>
        <TextField
          label="Email"
          type="email"
          placeholder="rhernandez@gmail.com"
          containerStyle={styles.textFieldContainer}
          labelStyle={styles.textFieldLabel}
          textFieldSx={styles.textFieldSx}
        />

        <TextField
          label="Password"
          type="password"
          placeholder="********"
          containerStyle={styles.textFieldContainer}
          labelStyle={styles.textFieldLabel}
          textFieldSx={styles.textFieldSx}
        />

        <div style={styles.rememberRow}>
          <Checkbox
            label="Remember me"
            checkboxSx={styles.checkboxSx}
            formControlSx={styles.checkboxFormControlSx}
          />

          <Typography
            text="Forgot password?"
            variant="link"
            style={styles.typographyLink}
          />
        </div>

        <Button
          label="Sign In"
          type="submit"
          sx={{ ...styles.buttonBase, ...styles.buttonPrimary }}
        />
      </div>

      <div style={styles.divider}>
        <div style={styles.dividerLine}></div>

        <div style={styles.dividerText}>
          <Typography text="or" variant="body" style={styles.typographyBody} />
        </div>

        <div style={styles.dividerLine}></div>
      </div>

      <div style={styles.socialButtons}>
        <button style={styles.socialButton}>
          <Icon icon={GoogleIcon} width={18} height={18} />
          Sign in with Google
        </button>

        <button style={styles.socialButton}>
          <Icon icon={GithubIcon} width={18} height={18} />
          Sign in with GitHub
        </button>
      </div>

      <div style={styles.footer}>
        <Typography
          text="Don't have an account?"
          variant="body"
          style={styles.typographyBody}
        />

        <Typography
          text="Sign up"
          variant="link"
          style={styles.typographyLink}
        />
      </div>
    </div>
  );
};

export default SignInCard;
