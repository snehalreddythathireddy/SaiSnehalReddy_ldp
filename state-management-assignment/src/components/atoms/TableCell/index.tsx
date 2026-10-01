import MuiTableCell from "@mui/material/TableCell";
import type { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
}

const TableCell = ({ children }: TableCellProps) => {
  return (
    <MuiTableCell>
      {children}
    </MuiTableCell>
  );
};

export default TableCell;