import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import github from "../../../assets/icons/github.svg";
import google from "../../../assets/icons/google.svg";
import { SIGNIN_CONSTANTS } from "../../../utils/constants";

const styles = {
  card: {
    maxWidth: "380px",
    margin: "40px auto",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #e5e5e5",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
  },

  fields: {
    marginTop: "20px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "14px",
  },

  divider: {
    textAlign: "center" as const,
    margin: "16px 0",
    color: "#999",
    fontSize: "14px",
  },

  socialButtons: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },

  socialButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    marginTop: "16px",
  },
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
      />

      <Typography
        text={SIGNIN_CONSTANTS.SUBTITLE}
        variant="body"
      />

      <div style={styles.fields}>
        <TextField
          label={SIGNIN_CONSTANTS.EMAIL_LABEL}
          type="email"
          placeholder={SIGNIN_CONSTANTS.EMAIL_PLACEHOLDER}
        />

        <TextField
          label={SIGNIN_CONSTANTS.PASSWORD_LABEL}
          type="password"
          placeholder={SIGNIN_CONSTANTS.PASSWORD_PLACEHOLDER}
        />
      </div>

      <div style={styles.row}>
        <Checkbox label={SIGNIN_CONSTANTS.REMEMBER_ME} />

        <Typography
          text={SIGNIN_CONSTANTS.FORGOT_PASSWORD}
          variant="link"
        />
      </div>

      <Button
        label={SIGNIN_CONSTANTS.SIGN_IN}
        onClick={handleSignIn}
        disabled={true}
      />

      <div style={styles.divider}>
        {SIGNIN_CONSTANTS.DIVIDER}
      </div>

      <div style={styles.socialButtons}>
        <button
          onClick={handleGoogleSignIn}
          style={styles.socialButton}
        >
          <Icon
            src={google}
            alt={SIGNIN_CONSTANTS.GOOGLE_ALT}
            width={24}
            height={24}
          />

          <Typography
            text={SIGNIN_CONSTANTS.GOOGLE_SIGN_IN}
            variant="body"
          />
        </button>

        <button
          onClick={handleGitHubSignIn}
          style={styles.socialButton}
        >
          <Icon
            src={github}
            alt={SIGNIN_CONSTANTS.GITHUB_ALT}
            width={24}
            height={24}
          />

          <Typography
            text={SIGNIN_CONSTANTS.GITHUB_SIGN_IN}
            variant="body"
          />
        </button>
      </div>

      <div style={styles.footer}>
        <Typography
          text={SIGNIN_CONSTANTS.NO_ACCOUNT}
          variant="body"
        />

        <Typography
          text={SIGNIN_CONSTANTS.SIGN_UP}
          variant="link"
        />
      </div>
    </div>
  );
};

export default SignInCard;