import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Typography from "../../atoms/Typography";
import styles from "./styles";

import { PAGINATION_RESULTS_TEXT, PAGINATION_PER_PAGE_TEXT } from "../../../utils/constants";

const Pagination = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.left}>
        <Typography variant="caption">{PAGINATION_RESULTS_TEXT}</Typography>
        <Typography variant="caption">{PAGINATION_PER_PAGE_TEXT}</Typography>
      </Box>

      <Box sx={styles.right}>
        <IconButton size="small">
          <KeyboardArrowLeftIcon />
        </IconButton>

        <Typography sx={styles.activePage}>1</Typography>
        <Typography variant="body1">2</Typography>
        <Typography variant="body1">3</Typography>

        <IconButton size="small">
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Pagination;