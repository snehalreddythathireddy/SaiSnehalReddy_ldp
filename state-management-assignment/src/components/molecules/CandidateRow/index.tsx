import TableRow from "@mui/material/TableRow";

import TableCell from "../../atoms/TableCell";
import StatusChip from "../../atoms/StatusChip";
import Typography from "../../atoms/Typography";
import styles from "./styles";

import type { Candidate } from "../../../types/candidate";

interface CandidateRowProps {
  candidate: Candidate;
}

const CandidateRow = ({ candidate }: CandidateRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Typography color="primary.main">{candidate.name}</Typography>
      </TableCell>
      <TableCell>{candidate.adjudication}</TableCell>
      <TableCell>
        <StatusChip label={candidate.status} sx={styles.status[candidate.status]} />
      </TableCell>
      <TableCell>{candidate.location}</TableCell>
      <TableCell>{candidate.date}</TableCell>
    </TableRow>
  );
};

export default CandidateRow;