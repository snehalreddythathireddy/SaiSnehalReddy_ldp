import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";

import CheckBox from "../../atoms/CheckBox";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import ContractRow from "../../molecules/ContractRow";
import type { Contract } from "../../../types/contract";
import infoCircleIcon from "../../../assets/icons/info-circle.svg";

import styles from "./styles";
import {
  CONTRACTS_TABLE_TITLE,
  CONTRACTS_TABLE_COLUMNS,
} from "../../../utils/constants";

interface ContractsTableProps {
  contracts: Contract[];
  selectedIds: number[];
  onToggle: (id: number) => void;
  onToggleAll: () => void;
}

const ContractsTable = ({ contracts, selectedIds, onToggle, onToggleAll }: ContractsTableProps) => {
  const allChecked = contracts.length > 0 && selectedIds.length === contracts.length;
  const someChecked = selectedIds.length > 0 && !allChecked;

  return (
    <Paper sx={styles.card}>
      <Stack direction="row" spacing={1} sx={styles.header}>
        <Typography variant="h4">{CONTRACTS_TABLE_TITLE}</Typography>
        <Icon src={infoCircleIcon} size={14} alt="info" />
      </Stack>

      <Table sx={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <CheckBox checked={allChecked} indeterminate={someChecked} onChange={onToggleAll} />
            </TableCell>
            {CONTRACTS_TABLE_COLUMNS.map((col) => (
              <TableCell key={col}>
                <Typography variant="body2" color="text.secondary">
                  {col}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract) => (
            <ContractRow
              key={contract.id}
              contract={contract}
              checked={selectedIds.includes(contract.id)}
              onToggle={onToggle}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ContractsTable;