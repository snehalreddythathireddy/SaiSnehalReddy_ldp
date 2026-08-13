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
    maxWidth: "380px",
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

  textFieldLabel: {
    display: "block",
    marginBottom: "4px",
    color: "#111827",
  },

  textFieldInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #E5E7EB",
    borderRadius: "6px",
    color: "#111827",
    outline: "none",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "14px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
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

  typographyBody: {
    color: "#9CA3AF",
    margin: "4px 0 0 0",
  },

  typographyLink: {
    color: "#6366F1",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "14px",
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    marginTop: "16px",
  },
};

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

  const handleGoogleSignIn = () => {
    console.log("Google sign in");
  };

  const handleGitHubSignIn = () => {
    console.log("GitHub sign in");
  };

  return (
    <div style={styles.card}>
      <Typography
        text={SIGNIN_CONSTANTS.TITLE}
        variant="heading"
        style={styles.typographyHeading}
      />

      <Typography
        text={SIGNIN_CONSTANTS.SUBTITLE}
        variant="body"
        style={styles.typographyBody}
      />

      <div style={styles.fields}>
        <TextField
          label={SIGNIN_CONSTANTS.EMAIL_LABEL}
          type="email"
          placeholder={SIGNIN_CONSTANTS.EMAIL_PLACEHOLDER}
          wrapperStyle={styles.textFieldWrapper}
          labelStyle={styles.textFieldLabel}
          inputStyle={styles.textFieldInput}
        />

        <TextField
          label={SIGNIN_CONSTANTS.PASSWORD_LABEL}
          type="password"
          placeholder={SIGNIN_CONSTANTS.PASSWORD_PLACEHOLDER}
          wrapperStyle={styles.textFieldWrapper}
          labelStyle={styles.textFieldLabel}
          inputStyle={styles.textFieldInput}
        />
      </div>

      <div style={styles.row}>
        <Checkbox
          label={SIGNIN_CONSTANTS.REMEMBER_ME}
          style={styles.checkboxLabel}
        />

        <Typography
          text={SIGNIN_CONSTANTS.FORGOT_PASSWORD}
          variant="link"
          style={styles.typographyLink}
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
          text={SIGNIN_CONSTANTS.NO_ACCOUNT}
          variant="body"
          style={styles.typographyBody}
        />

        <Typography
          text={SIGNIN_CONSTANTS.SIGN_UP}
          variant="link"
          style={styles.typographyLink}
        />
      </div>
    </div>
  );
};

export default SignInCard;