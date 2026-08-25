import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import styles from "./styles";

import LogoIcon from "../../../assets/icons/logo.svg";
import {
  SIDEBAR_MENU_ITEMS,
  type MenuItem,
  SIDEBAR_LOGO_TEXT,
  SIDEBAR_USER_NAME,
  SIDEBAR_USER_HANDLE,
  SIDEBAR_LOGOUT_ALT,
} from "../../../utils/constants";

const Sidebar = () => {
  return (
    <Box sx={styles.root}>
      <Typography variant="h6" sx={styles.logo}>
        {SIDEBAR_LOGO_TEXT}
      </Typography>

      <List sx={styles.menu}>
        {SIDEBAR_MENU_ITEMS.map((item: MenuItem) => {
          const isSelected = item.label === "Candidates";

          return (
            <ListItemButton key={item.label} sx={[styles.menuItem, isSelected && styles.selectedItem]}>
              <ListItemIcon sx={styles.icon}>
                <Icon src={item.icon} alt={item.label} />
              </ListItemIcon>

              <Typography variant="body2" sx={isSelected ? styles.selectedText : styles.text}>
                {item.label}
              </Typography>
            </ListItemButton>
          );
        })}
      </List>

      <Divider />

      <Box sx={styles.footer}>
        <Box sx={styles.profile}>
          <Box>
            <Typography variant="body2">{SIDEBAR_USER_NAME}</Typography>
            <Typography variant="caption" color="secondary.main">
              {SIDEBAR_USER_HANDLE}
            </Typography>
          </Box>

          <Icon src={LogoIcon} alt={SIDEBAR_LOGOUT_ALT} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;