import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import type { SxProps, Theme } from "@mui/material/styles";

import TableHeader from "../../molecules/TableHeader";
import CandidateRow from "../../molecules/CandidateRow";

import type { Candidate } from "../../../mock/candidates";

interface CandidateTableProps {
  candidates: Candidate[];
}

const styles: Record<string, SxProps<Theme>> = {
  table: {
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 2,
  },
};

const CandidateTable = ({
  candidates,
}: CandidateTableProps) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={styles.table}
    >
      <Table>
        <TableHeader />

        <TableBody>
          {candidates.map((candidate) => (
            <CandidateRow
              key={candidate.id}
              candidate={candidate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidateTable;