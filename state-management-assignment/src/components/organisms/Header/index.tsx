import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";

import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import styles from "./styles";

import { HEADER_TITLE, HEADER_EXPORT_LABEL, HEADER_MANUAL_ORDER_LABEL } from "../../../utils/constants";

const Header = () => {
  return (
    <Box sx={styles.root}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h1">{HEADER_TITLE}</Typography>

        <Stack direction="row" spacing={2} sx={styles.buttons}>
          <Button variant="outlined">
            <FileDownloadOutlinedIcon sx={styles.buttonIcon} />
            {HEADER_EXPORT_LABEL}
          </Button>

          <Button>
            <AddIcon sx={styles.buttonIcon} />
            {HEADER_MANUAL_ORDER_LABEL}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;