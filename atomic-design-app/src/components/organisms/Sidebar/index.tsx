import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import IconText from "../../molecules/IconText";
import styles from "./styles";
import {
  SIDEBAR_LOGO_ALT,
  SIDEBAR_HOME_LABEL,
  SIDEBAR_CASH_LABEL,
  SIDEBAR_WATCH_HOW_TO_LABEL,
} from "../../../utils/constants";
import groupIcon from "../../../assets/icons/Group.svg";
import homeIcon from "../../../assets/icons/home-2.svg";
import coinIcon from "../../../assets/icons/coin.svg";

interface SidebarProps {
  active: "home" | "cash";
  onNavigate: (page: "home" | "cash") => void;
  onWatchHowTo?: () => void;
}

const Sidebar = ({ active, onNavigate, onWatchHowTo }: SidebarProps) => {
  const handleNavigateHome = () => {
    onNavigate("home");
  };

  const handleNavigateCash = () => {
    onNavigate("cash");
  };

  return (
    <Stack sx={styles.root}>
      <Stack direction="row" spacing={1} sx={styles.logoRow}>
        <Icon src={groupIcon} size={28} alt={SIDEBAR_LOGO_ALT} />
        <Typography variant="h4" color="text.primary">{SIDEBAR_LOGO_ALT}</Typography>
      </Stack>

      <Stack spacing={0.5}>
        <IconText
          icon={homeIcon}
          label={SIDEBAR_HOME_LABEL}
          active={active === "home"}
          onClick={handleNavigateHome}
        />
        <IconText
          icon={coinIcon}
          label={SIDEBAR_CASH_LABEL}
          active={active === "cash"}
          onClick={handleNavigateCash}
        />
      </Stack>

      {/* Bottom-left footer link, per the Figma frame */}
      <Box sx={styles.footer}>
        <Typography
          variant="body2"
          color="text.secondary"
          component="a"
          onClick={onWatchHowTo}
          role={onWatchHowTo ? "button" : undefined}
        >
          <Box component="span" sx={styles.footerLink}>
            {SIDEBAR_WATCH_HOW_TO_LABEL}
          </Box>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Sidebar;