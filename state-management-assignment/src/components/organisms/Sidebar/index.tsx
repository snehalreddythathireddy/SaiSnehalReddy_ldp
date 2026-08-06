import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import type { SxProps, Theme } from "@mui/material/styles";

import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";

import DashboardIcon from "../../../icons/Dashboard.svg";
import ContactsIcon from "../../../icons/Contacts.svg";
import HammerIcon from "../../../icons/hammer.svg";
import LogsIcon from "../../../icons/logs.svg";
import AnalyticsIcon from "../../../icons/Analytics.svg";
import AccountIcon from "../../../icons/Account.svg";
import ScreeningIcon from "../../../icons/Screening.svg";
import LogoIcon from "../../../icons/Logo.svg";

const menuItems = [
  { label: "Home", icon: DashboardIcon },
  { label: "Candidates", icon: ContactsIcon },
  { label: "Adverse Actions", icon: HammerIcon },
  { label: "Logs", icon: LogsIcon },
  { label: "Analytics", icon: AnalyticsIcon },
  { label: "Account", icon: AccountIcon },
  { label: "Screenings", icon: ScreeningIcon },
];

const styles: Record<string, SxProps<Theme>> = {
  root: {
    width: 238,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 2,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
  },

  logo: {
    color: "primary.main",
    fontWeight: 700,
    mb: 3,
    ml: 1,
  },

  menu: {
    flex: 1,
  },

  menuItem: {
    borderRadius: 2,
    mb: 1,
    py: 1,
  },

  selectedItem: {
    bgcolor: "primary.light",
  },

  icon: {
    minWidth: 36,
  },

  text: {
    color: "text.primary",
  },

  selectedText: {
    color: "primary.main",
    fontWeight: 600,
  },

  footer: {
    pt: 2,
  },

  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Sidebar = () => {
  return (
    <Box sx={styles.root}>
      <Typography variant="h6" sx={styles.logo}>
        RECRUIT
      </Typography>

      <List sx={styles.menu}>
        {menuItems.map((item) => {
          const isSelected =
            item.label === "Candidates";

          return (
            <ListItemButton
              key={item.label}
              sx={[
                styles.menuItem,
                isSelected && styles.selectedItem,
              ]}
            >
              <ListItemIcon sx={styles.icon}>
                <Icon
                  src={item.icon}
                  alt={item.label}
                />
              </ListItemIcon>

              <Typography
                variant="body2"
                sx={
                  isSelected
                    ? styles.selectedText
                    : styles.text
                }
              >
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
            <Typography variant="body2">
              James Rodriguez
            </Typography>

            <Typography
              variant="caption"
              color="secondary.main"
            >
              James.co
            </Typography>
          </Box>

          <Icon
            src={LogoIcon}
            alt="Logout"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;