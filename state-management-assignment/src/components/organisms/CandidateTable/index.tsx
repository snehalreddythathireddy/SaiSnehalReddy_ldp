import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import TableHeader from "../../molecules/TableHeader";
import CandidateRow from "../../molecules/CandidateRow";
import styles from "./styles";

import type { Candidate } from "../../../types/candidate";

interface CandidateTableProps {
  candidates: Candidate[];
}

const CandidateTable = ({ candidates }: CandidateTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={styles.table}>
      <Table>
        <TableHeader />
        <TableBody>
          {candidates.map((candidate) => (
            <CandidateRow key={candidate.id} candidate={candidate} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidateTable;