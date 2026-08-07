import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import type { SxProps, Theme } from "@mui/material/styles";

import Checkbox from "../../atoms/Checkbox";
import Typography from "../../atoms/Typography";

import { STATUS_OPTIONS, ADJUDICATION_OPTIONS } from "../../../utils/constants";

interface FilterDropdownProps {
  status: string;
  setStatus: (value: string) => void;

  adjudication: string;
  setAdjudication: (value: string) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  root: {
    width: 253,
    bgcolor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    p: 2,
  },

  sectionLabel: {
    mb: 1.5,
  },

  optionRow: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    height: 24,
  },
};

const FilterDropdown = ({
  status,
  setStatus,
  adjudication,
  setAdjudication,
}: FilterDropdownProps) => {
  const handleStatusChange = (option: string) => {
    setStatus(option);
  };

  const handleAdjudicationChange = (option: string) => {
    setAdjudication(option);
  };

  return (
    <Paper sx={styles.root}>
      <Typography variant="h6">Filters</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={styles.sectionLabel}>
        Status
      </Typography>

      <Stack spacing={1}>
        {STATUS_OPTIONS.map((option) => (
          <Box key={option} sx={styles.optionRow}>
            <Checkbox
              checked={status === option}
              onChange={() => handleStatusChange(option)}
            />

            <Typography variant="body1">{option}</Typography>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={styles.sectionLabel}>
        Adjudication
      </Typography>

      <Stack spacing={1}>
        {ADJUDICATION_OPTIONS.map((option) => (
          <Box key={option} sx={styles.optionRow}>
            <Checkbox
              checked={adjudication === option}
              onChange={() => handleAdjudicationChange(option)}
            />

            <Typography variant="body1">{option}</Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default FilterDropdown;