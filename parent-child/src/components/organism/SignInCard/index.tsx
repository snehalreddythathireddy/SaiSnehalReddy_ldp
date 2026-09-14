import type { CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

import github from "../../../assets/icons/github.svg";
import google from "../../../assets/icons/google.svg";

import { SIGNIN_CONSTANTS } from "../../../utils/constants";

const styles: Record<string, CSSProperties> = {
  card: {
    width: theme.layout.cardWidth,
    minHeight: theme.layout.cardHeight,
    margin: "40px auto",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #E5E5E5",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    backgroundColor: "#FFFFFF",
  },

  fields: {
    marginTop: "20px",
  },

  textFieldWrapper: {
    marginBottom: "16px",
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

  divider: {
    textAlign: "center",
    margin: "16px 0",
    color: "#999",
    fontSize: "14px",
  },

  socialButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  typographyHeading: {
    color: "#111827",
    margin: 0,
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

const signInButtonSx: SxProps<Theme> = {
  borderRadius: 1.5,
  textTransform: "none",
  py: 1.3,
};

const socialButtonSx: SxProps<Theme> = {
  borderRadius: 1.5,
  textTransform: "none",
  py: 1.2,
  justifyContent: "center",
};

const SignInCard = () => {
  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

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
        <Typography
          text="Sign In"
          variant="h1"
          style={styles.typographyH1}
        />

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

      <Button
        onClick={handleSignIn}
        disabled
        fullWidth
        sx={signInButtonSx}
      >
        {SIGNIN_CONSTANTS.SIGN_IN}
      </Button>

      <div style={styles.divider}>
        {SIGNIN_CONSTANTS.DIVIDER}
      </div>

      <div style={styles.socialButtons}>
        <Button
          onClick={handleGoogleSignIn}
          variant="outlined"
          fullWidth
          startIcon={
            <Icon
              src={google}
              alt={SIGNIN_CONSTANTS.GOOGLE_ALT}
              width={20}
              height={20}
            />
          }
          sx={socialButtonSx}
        >
          {SIGNIN_CONSTANTS.GOOGLE_SIGN_IN}
        </Button>

        <Button
          onClick={handleGitHubSignIn}
          variant="outlined"
          fullWidth
          startIcon={
            <Icon
              src={github}
              alt={SIGNIN_CONSTANTS.GITHUB_ALT}
              width={20}
              height={20}
            />
          }
          sx={socialButtonSx}
        >
          {SIGNIN_CONSTANTS.GITHUB_SIGN_IN}
        </Button>
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