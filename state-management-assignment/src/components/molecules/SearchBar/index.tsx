import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import type { ChangeEvent } from "react";

import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import TextField from "../../atoms/TextField";
import styles from "./styles";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
}

const SearchBar = ({ search, onSearchChange, onFilterClick }: SearchBarProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <Stack direction="row" spacing={1} sx={styles.root}>
      <TextField value={search} placeholder="Search any candidate" onChange={handleSearchChange} />

      <IconButton sx={styles.iconButton} onClick={onFilterClick}>
        <FilterListOutlinedIcon />
      </IconButton>

      <IconButton sx={styles.iconButton}>
        <MoreVertOutlinedIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;