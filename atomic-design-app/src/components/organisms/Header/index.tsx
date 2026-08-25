import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import UserProfile from "../../molecules/UserProfile";
import styles from "./styles";
import { HEADER_BACK_LABEL } from "../../../utils/constants";
import arrowLeftIcon from "../../../assets/icons/arrow-left.svg";
import type { User } from "../../../types/user";

interface HeaderProps {
  title: string;
  subtitle: string;
  onBack: () => void;
  user: User;
}

const Header = ({ title, subtitle, onBack, user }: HeaderProps) => {
  return (
    <Stack direction="row" sx={styles.root}>
      <Box>
        <Typography variant="h1" color="text.primary">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={styles.subtitle}>
          {subtitle}
        </Typography>

        <Stack direction="row" spacing={0.75} onClick={onBack} sx={styles.backLink}>
          <Icon src={arrowLeftIcon} size={15} alt={HEADER_BACK_LABEL} />
          <Typography variant="body2" color="text.secondary">
            {HEADER_BACK_LABEL}
          </Typography>
        </Stack>
      </Box>

      <UserProfile name={user.name} avatarSrc={user.avatarSrc} />
    </Stack>
  );
};

export default Header;