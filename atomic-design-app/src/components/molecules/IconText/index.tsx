import Stack from "@mui/material/Stack";

import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";

import styles from "./styles";

interface IconTextProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const IconText = ({ icon, label, active, onClick }: IconTextProps) => {
  return (
    <Stack direction="row" spacing={1.25} onClick={onClick} sx={styles.root(active)}>
      <Icon src={icon} />
      <Typography variant="body2" color={active ? "primary.main" : "text.secondary"}>
        {label}
      </Typography>
    </Stack>
  );
};

export default IconText;