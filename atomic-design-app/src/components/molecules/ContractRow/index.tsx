import {
  TableCell,
  TableRow,
} from "@mui/material";

import {
  Checkbox,
  Typography,
} from "../../atoms";

import styles from "./styles";
import { CONTRACT_ROW_TERM_UNIT } from "../../../utils/constants";
import { money } from "../../../utils/format";
import type { Contract } from "../../../types/contract";

interface ContractRowProps {
  contract: Contract;
  checked: boolean;
  onToggle: (id: number) => void;
}

const ContractRow = ({
  contract,
  checked,
  onToggle,
}: ContractRowProps) => {
  const handleToggle = () => {
    onToggle(contract.id);
  };

  return (
    <TableRow hover sx={styles.row(checked)}>
      <TableCell padding="checkbox">
        <Checkbox checked={checked} onChange={handleToggle} />
      </TableCell>

      <TableCell>
        <Typography variant="body1" sx={styles.primaryText}>
          {contract.name}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body2" sx={styles.secondaryText}>
          {contract.type}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Typography variant="body1" sx={styles.primaryText}>
          {money(contract.perPayment)}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Typography variant="body2" sx={styles.secondaryText}>
          {contract.termLength} {CONTRACT_ROW_TERM_UNIT}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Typography variant="body1" sx={styles.primaryText}>
          {money(contract.payment)}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default ContractRow;