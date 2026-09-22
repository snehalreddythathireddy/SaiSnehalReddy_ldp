import { useState } from "react";
import type { MouseEvent } from "react";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Avatar from "../../atoms/Avatar";
import Typography from "../../atoms/Typography";
import Divider from "../../atoms/Divider";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import infoCircleIcon from "../../../assets/icons/info-circle.svg";
import settingIcon from "../../../assets/icons/setting-4.svg";
import logoutIcon from "../../../assets/icons/logout.svg";

import styles from "./styles";
import {
  USER_PROFILE_EDIT_LABEL,
  USER_PROFILE_LOGOUT_LABEL,
} from "../../../utils/constants";

interface UserProfileProps {
  name: string;
  avatarSrc?: string;
}

const menuItems: { label: string; icon?: string }[] = [
  { label: "Manage Subscriptions" },
  { label: "Help", icon: infoCircleIcon },
  { label: "Settings", icon: settingIcon },
];

const UserProfile = ({ name, avatarSrc }: UserProfileProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box onClick={handleOpen} sx={styles.avatarTrigger}>
        <Avatar src={avatarSrc} alt={name} size={36} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1.5} sx={styles.profileHeader}>
            <Avatar src={avatarSrc} alt={name} size={44} />
            <Stack spacing={0.25}>
              <Typography variant="body1" color="text.primary">{name}</Typography>
              <Typography variant="button2" color="primary.main" component="a">
                {USER_PROFILE_EDIT_LABEL}
              </Typography>
            </Stack>
          </Stack>

          <Divider spacing={0} />

          <Stack spacing={0.5}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="text"
                fullWidth
                startIcon={item.icon ? <Icon src={item.icon} size={16} /> : undefined}
                sx={styles.navItem}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Divider spacing={0} />

          <Button
            variant="text"
            fullWidth
            startIcon={<Icon src={logoutIcon} size={16} />}
            sx={styles.logoutItem}
          >
            {USER_PROFILE_LOGOUT_LABEL}
          </Button>
        </Stack>
      </Popover>
    </>
  );
};

export default UserProfile;