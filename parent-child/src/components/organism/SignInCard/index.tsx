import { useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

import github from "../../../assets/icons/github.svg";
import google from "../../../assets/icons/google.svg";

import { SIGNIN_CONSTANTS } from "../../../utils/constants";
import theme from "../../../theme/theme";

const styles: Record<string, CSSProperties> = {
  card: {
    width: theme.layout.cardWidth,
    minHeight: theme.layout.cardHeight,
    margin: "40px auto",
    padding: "32px",
    borderRadius: "12px",
    border: `1px solid ${theme.colors.border}`,
    backgroundColor: theme.colors.white,
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.layout.formGap,
  },
  rememberRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    textAlign: "center",
    margin: "16px 0",
    color: theme.colors.textSecondary,
    fontSize: "14px",
  },
  socialButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
  textFieldContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xs,
  },
  // TODO: confirm these keys exist in theme.typography (h1, label)
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
  textFieldLabel: {
    fontFamily: theme.typography.label.fontFamily,
    fontSize: theme.typography.label.fontSize,
    fontWeight: theme.typography.label.fontWeight,
    lineHeight: theme.typography.label.lineHeight,
    color: theme.colors.textPrimary,
  },
};

/* ---------- MUI sx styles (passed via sx={}) ---------- */
const buttonBaseSx = {
  height: theme.layout.buttonHeight,
  borderRadius: theme.radius.xs,
  textTransform: "none",
  boxShadow: "none",
  fontFamily: theme.typography.button.fontFamily,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  lineHeight: theme.typography.button.lineHeight,
  letterSpacing: theme.typography.button.letterSpacing,
  "&:hover": { boxShadow: "none" },
} as const;

const primaryButtonSx: SxProps<Theme> = {
  ...buttonBaseSx,
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  "&:hover": { backgroundColor: theme.colors.primary, boxShadow: "none" },
  "&.Mui-disabled": {
    backgroundColor: theme.colors.primaryDisabled,
    color: theme.colors.white,
  },
};

const socialButtonSx: SxProps<Theme> = {
  ...buttonBaseSx,
  borderColor: theme.colors.border,
  color: theme.colors.textSecondary,
  justifyContent: "center",
};

const checkboxSx: SxProps<Theme> = {
  padding: 0,
  "& .MuiSvgIcon-root": { fontSize: 18 },
  color: theme.colors.border,
  "&.Mui-checked": { color: theme.colors.primary },
  "&.Mui-disabled": { color: theme.colors.primaryDisabled },
};

const checkboxFormControlSx: SxProps<Theme> = {
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
};

const textFieldSx: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.radius.xs,
    "& fieldset": { borderColor: theme.colors.border },
  },
};

/* ---------- component ---------- */
const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const isFormEmpty = email.trim() === "" || password.trim() === "";

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleRememberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setRememberMe(e.target.checked);

  const handleSignIn = () => console.log("Sign in clicked", { email, rememberMe });
  const handleGoogleSignIn = () => console.log("Google sign in");
  const handleGitHubSignIn = () => console.log("GitHub sign in");

  return (
    <div style={styles.card}>
      <div style={styles.heading}>
        <Typography
          text={SIGNIN_CONSTANTS.TITLE}
          variant="h1"
          style={styles.typographyH1}
        />
        <Typography
          text={SIGNIN_CONSTANTS.SUBTITLE}
          variant="body"
          style={styles.typographyBody}
        />
      </div>

      <div style={styles.form}>
        <TextField
          label={SIGNIN_CONSTANTS.EMAIL_LABEL}
          type="email"
          placeholder={SIGNIN_CONSTANTS.EMAIL_PLACEHOLDER}
          value={email}
          onChange={handleEmailChange}
          containerStyle={styles.textFieldContainer}
          labelStyle={styles.textFieldLabel}
          textFieldSx={textFieldSx}
        />

        <TextField
          label={SIGNIN_CONSTANTS.PASSWORD_LABEL}
          type="password"
          placeholder={SIGNIN_CONSTANTS.PASSWORD_PLACEHOLDER}
          value={password}
          onChange={handlePasswordChange}
          containerStyle={styles.textFieldContainer}
          labelStyle={styles.textFieldLabel}
          textFieldSx={textFieldSx}
        />

        <div style={styles.rememberRow}>
          <Checkbox
            label={SIGNIN_CONSTANTS.REMEMBER_ME}
            checked={rememberMe}
            onChange={handleRememberChange}
            checkboxSx={checkboxSx}
            formControlSx={checkboxFormControlSx}
          />
          <Typography
            text={SIGNIN_CONSTANTS.FORGOT_PASSWORD}
            variant="link"
            style={styles.typographyLink}
          />
        </div>

        <Button
          onClick={handleSignIn}
          disabled={isFormEmpty}
          fullWidth
          sx={primaryButtonSx}
        >
          {SIGNIN_CONSTANTS.SIGN_IN}
        </Button>
      </div>

      <div style={styles.divider}>{SIGNIN_CONSTANTS.DIVIDER}</div>

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