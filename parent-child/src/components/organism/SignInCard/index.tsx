import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import GoogleIcon from "../../../assets/icons/GoogleIcon";
import GithubIcon from "../../../assets/icons/GithubIcon";
import Icon from "../../atoms/Icon";
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
  return (
    <div style={styles.card}>
      <Typography text="Sign in" variant="heading" />
      <Typography text="Please enter your login credentials" variant="body" />

      <div style={styles.fields}>
        <TextField
          label="Email"
          type="email"
          placeholder="you@example.com"
        />

        <TextField
          label="Password"
          type="password"
          placeholder="********"
        />
      </div>

      <div style={styles.row}>
        <Checkbox label="Remember me" />
        <Typography text="Forgot password?" variant="link" />
      </div>

      <Button
        label="Sign in"
        onClick={() => console.log("Sign in clicked")}
      />

      <div style={styles.divider}>or</div>

      <div style={styles.socialButtons}>
        <button
          onClick={() => console.log("Google sign in")}
          style={styles.socialButton}
        >
          <Icon icon={GoogleIcon} />
          Sign in with Google
        </button>

        <button
          onClick={() => console.log("GitHub sign in")}
          style={styles.socialButton}
        >
          <Icon icon={GithubIcon} />
          Sign in with GitHub
        </button>
      </div>

      <div style={styles.footer}>
        <Typography text="Don't have an account?" variant="body" />
        <Typography text="Sign up" variant="link" />
      </div>
    </div>
  );
};

export default SignInCard;