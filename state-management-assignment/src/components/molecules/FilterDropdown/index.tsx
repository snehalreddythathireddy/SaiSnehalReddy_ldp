import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import Checkbox from "../../atoms/Checkbox";
import Typography from "../../atoms/Typography";

interface FilterDropdownProps {
  status: string;
  setStatus: (value: string) => void;

  adjudication: string;
  setAdjudication: (value: string) => void;
}

const statusOptions = [
  "All Status",
  "Clear",
  "Consider",
];

const adjudicationOptions = [
  "All",
  "Engaged",
  "Pre Adverse Action",
];

const FilterDropdown = ({
  status,
  setStatus,
  adjudication,
  setAdjudication,
}: FilterDropdownProps) => {
  return (
    <Box
      sx={{
        width: 253,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "6px",
        boxShadow: "0px 4px 28px rgba(45,45,47,0.1)",
        p: 2,
      }}
    >
      <Typography variant="h6">
        Filters
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="body1"
        sx={{ mb: 1.5 }}
      >
        Status
      </Typography>

      <Stack spacing={1}>
        {statusOptions.map((option) => (
          <Box
            key={option}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              height: 24,
            }}
          >
            <Checkbox
              checked={status === option}
              onChange={() => setStatus(option)}
            />

            <Typography variant="body1">
              {option}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="body1"
        sx={{ mb: 1.5 }}
      >
        Adjudication
      </Typography>

      <Stack spacing={1}>
        {adjudicationOptions.map((option) => (
          <Box
            key={option}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              height: 24,
            }}
          >
            <Checkbox
              checked={adjudication === option}
              onChange={() =>
                setAdjudication(option)
              }
            />

            <Typography variant="body1">
              {option}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
export default FilterDropdown;