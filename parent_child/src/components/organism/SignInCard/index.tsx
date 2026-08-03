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
};

const SignInCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>
        <Typography
          text="Sign in"
          variant="h1"
        />

        <Typography
          text="Please enter your login credentials"
          variant="body"
        />
      </div>

      <div style={styles.form}>
        <TextField
          label="Email"
          type="email"
          placeholder="rhernandez@gmail.com"
        />

        <TextField
          label="Password"
          type="password"
          placeholder="********"
        />

        <div style={styles.rememberRow}>
          <Checkbox label="Remember me" />

          <Typography
            text="Forgot password?"
            variant="link"
          />
        </div>

        <Button
          label="Sign In"
          type="submit"
        />
      </div>

      <div style={styles.divider}>
        <div style={styles.dividerLine}></div>

        <div style={styles.dividerText}>
          <Typography
            text="or"
            variant="body"
          />
        </div>

        <div style={styles.dividerLine}></div>
      </div>

      <div style={styles.socialButtons}>
        <button style={styles.socialButton}>
          <Icon
            icon={GoogleIcon}
            width={18}
            height={18}
          />

          Sign in with Google
        </button>

        <button style={styles.socialButton}>
          <Icon
            icon={GithubIcon}
            width={18}
            height={18}
          />

          Sign in with GitHub
        </button>
      </div>

      <div style={styles.footer}>
        <Typography
          text="Don't have an account?"
          variant="body"
        />

        <Typography
          text="Sign up"
          variant="link"
        />
      </div>
    </div>
  );
};

export default SignInCard;