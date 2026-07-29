interface TypographyProps {
  text: string;
  variant?: 'heading' | 'body' | 'link';
}

const styles = {
  heading: {
    color: '#111827',
    margin: 0,
  },
  body: {
    color: '#9CA3AF',
    margin: '4px 0 0 0',
  },
  link: {
    color: '#6366F1',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '14px',
  },
};

const Typography = ({ text, variant = 'body' }: TypographyProps) => {
  if (variant === 'heading') return <h2 style={styles.heading}>{text}</h2>;
  if (variant === 'link') return <a href="#" style={styles.link}>{text}</a>;
  return <p style={styles.body}>{text}</p>;
};

export default Typography;