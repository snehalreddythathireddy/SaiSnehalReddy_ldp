import type { CSSProperties } from 'react';

interface TypographyProps {
  text: string;
  variant?: 'heading' | 'body' | 'link';
  style?: CSSProperties;
}

const Typography = ({ text, variant = 'body', style }: TypographyProps) => {
  if (variant === 'heading') return <h2 style={style}>{text}</h2>;
  if (variant === 'link') return <a href="#" style={style}>{text}</a>;
  return <p style={style}>{text}</p>;
};

export default Typography;