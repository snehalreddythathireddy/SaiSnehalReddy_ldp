import TableRow from "@mui/material/TableRow";
import type { SxProps, Theme } from "@mui/material/styles";

import TableCell from "../../atoms/TableCell";
import StatusChip from "../../atoms/StatusChip";
import Typography from "../../atoms/Typography";

import type { Candidate } from "../../../mock/candidates";

interface CandidateRowProps {
  candidate: Candidate;
}

const statusStyles: Record<string, SxProps<Theme>> = {
  CLEAR: {
    bgcolor: "success.light",
    color: "success.main",
  },

  CONSIDER: {
    bgcolor: "warning.light",
    color: "warning.main",
  },
};

const CandidateRow = ({
  candidate,
}: CandidateRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Typography color="primary.main">
          {candidate.name}
        </Typography>
      </TableCell>

      <TableCell>
        {candidate.adjudication}
      </TableCell>

      <TableCell>
        <StatusChip
          label={candidate.status}
          sx={statusStyles[candidate.status]}
        />
      </TableCell>

      <TableCell>
        {candidate.location}
      </TableCell>

      <TableCell>
        {candidate.date}
      </TableCell>
    </TableRow>
  );
};

export default CandidateRow;