import Chip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";

interface StatusChipProps extends Omit<ChipProps, "label"> {
  label: string;
}

const StatusChip = ({ label, ...props }: StatusChipProps) => {
  return <Chip label={label} {...props} />;
};

export default StatusChip;