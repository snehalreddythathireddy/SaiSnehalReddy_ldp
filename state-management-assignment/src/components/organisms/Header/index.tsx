import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { SxProps, Theme } from "@mui/material/styles";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";

import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";

const styles: Record<string, SxProps<Theme>> = {
  root: {
    mb: 3,
  },

  buttons: {
    alignItems: "center",
  },
};

const Header = () => {
  return (
    <Box sx={styles.root}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h1">
          Candidates
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={styles.buttons}
        >
          <Button variant="outlined">
            <FileDownloadOutlinedIcon sx={{ mr: 1 }} />
            Export
          </Button>

          <Button>
            <AddIcon sx={{ mr: 1 }} />
            Manual Order
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;