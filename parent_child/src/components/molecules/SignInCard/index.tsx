import { useState } from 'react';
import Typography from '../../atoms/Typography';
import TextField from '../../atoms/TextField';
import Checkbox from '../../atoms/Checkbox';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const styles = {
  card: {
    maxWidth: '380px',
    margin: '40px auto',
    padding: '32px',
    borderRadius: '12px',
    border: '1px solid #eee',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  fields: {
    marginTop: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '14px',
  },
  divider: {
    textAlign: 'center' as const,
    margin: '16px 0',
    color: '#999',
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '16px',
  },
};

const SignInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div style={styles.card}>
      <Typography text="Sign in" variant="heading" />
      <Typography text="Please enter your login credentials" variant="body" />

      <div style={styles.fields}>
        <TextField
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={styles.row}>
        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <Typography text="Forgot password?" variant="link" />
      </div>

      <Button
        label="Sign in"
        onClick={() => console.log('Sign in clicked')}
        disabled={!email || !password}
      />
      <div style={styles.divider}>or</div>

      <div style={styles.socialButtons}>
        <button onClick={() => console.log('Google sign in')} style={styles.socialButton}>
          <Icon name="google" />
          Sign in with Google
        </button>
        <button onClick={() => console.log('GitHub sign in')} style={styles.socialButton}>
          <Icon name="github" />
          Sign in with GitHub
        </button>
      </div>

      <div style={styles.footer}>
        <Typography text="Don't have an account? " variant="body" />
        <Typography text="Sign up" variant="link" />
      </div>
    </div>
  );
};

export default SignInCard;