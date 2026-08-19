import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import Checkbox from "../../atoms/Checkbox";
import Typography from "../../atoms/Typography";
import styles from "./styles";

import { STATUS_OPTIONS, ADJUDICATION_OPTIONS } from "../../../utils/constants";

interface FilterDropdownProps {
  status: string;
  setStatus: (value: string) => void;
  adjudication: string;
  setAdjudication: (value: string) => void;
}

interface FilterOptionRowProps {
  option: string;
  selected: boolean;
  onSelect: (option: string) => void;
}

const FilterOptionRow = ({ option, selected, onSelect }: FilterOptionRowProps) => {
  const handleChange = () => {
    onSelect(option);
  };

  return (
    <Box sx={styles.optionRow}>
      <Checkbox checked={selected} onChange={handleChange} />
      <Typography variant="body1">{option}</Typography>
    </Box>
  );
};

const FilterDropdown = ({ status, setStatus, adjudication, setAdjudication }: FilterDropdownProps) => {
  return (
    <Paper sx={styles.root}>
      <Typography variant="h6">Filters</Typography>

      <Divider sx={styles.divider} />

      <Typography variant="body1" sx={styles.sectionLabel}>
        Status
      </Typography>

      <Stack spacing={1}>
        {STATUS_OPTIONS.map((option) => (
          <FilterOptionRow key={option} option={option} selected={status === option} onSelect={setStatus} />
        ))}
      </Stack>

      <Divider sx={styles.divider} />

      <Typography variant="body1" sx={styles.sectionLabel}>
        Adjudication
      </Typography>

      <Stack spacing={1}>
        {ADJUDICATION_OPTIONS.map((option) => (
          <FilterOptionRow
            key={option}
            option={option}
            selected={adjudication === option}
            onSelect={setAdjudication}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default FilterDropdown;