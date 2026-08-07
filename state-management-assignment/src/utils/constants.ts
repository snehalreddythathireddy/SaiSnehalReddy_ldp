import DashboardIcon from "../assets/icons/dashboard.svg";
import ContactsIcon from "../assets/icons/contacts.svg";
import HammerIcon from "../assets/icons/hammer.svg";
import LogsIcon from "../assets/icons/logs.svg";
import AnalyticsIcon from "../assets/icons/analytics.svg";
import AccountIcon from "../assets/icons/account.svg";
import ScreeningIcon from "../assets/icons/screening.svg";

export const STATUS_OPTIONS = ["All Status", "Clear", "Consider"];

export const ADJUDICATION_OPTIONS = ["All", "Engaged", "Pre Adverse Action"];

export interface MenuItem {
  label: string;
  icon: string;
}

export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  { label: "Home", icon: DashboardIcon },
  { label: "Candidates", icon: ContactsIcon },
  { label: "Adverse Actions", icon: HammerIcon },
  { label: "Logs", icon: LogsIcon },
  { label: "Analytics", icon: AnalyticsIcon },
  { label: "Account", icon: AccountIcon },
  { label: "Screenings", icon: ScreeningIcon },
];

export const PAGINATION_RESULTS_TEXT = "10 out of 84 results";
export const PAGINATION_PER_PAGE_TEXT = "10 per page";