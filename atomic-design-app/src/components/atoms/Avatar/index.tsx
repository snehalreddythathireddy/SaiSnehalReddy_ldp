import MuiAvatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import type { SxProps, Theme } from "@mui/material/styles";

import styles from "./styles";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const Avatar = ({ src, alt, size = 36, onClick, sx }: AvatarProps) => {
  const avatar = (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={[styles.avatar(size), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    />
  );

  if (!onClick) return avatar;

  return (
    <ButtonBase onClick={onClick} sx={styles.clickableWrapper}>
      {avatar}
    </ButtonBase>
  );
};

export default Avatar;