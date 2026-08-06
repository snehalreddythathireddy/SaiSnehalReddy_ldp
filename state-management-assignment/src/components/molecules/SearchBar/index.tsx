import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import type { SxProps, Theme } from "@mui/material/styles";

import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import TextField from "../../atoms/TextField";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
}

const styles: Record<string, SxProps<Theme>> = {
  root: {
    alignItems: "center",
  },

  iconButton: {
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 1,
  },
};

const SearchBar = ({
  search,
  onSearchChange,
  onFilterClick,
}: SearchBarProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={styles.root}
    >
      <TextField
        value={search}
        placeholder="Search any candidate"
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <IconButton
        sx={styles.iconButton}
        onClick={onFilterClick}
      >
        <FilterListOutlinedIcon />
      </IconButton>

      <IconButton sx={styles.iconButton}>
        <MoreVertOutlinedIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;