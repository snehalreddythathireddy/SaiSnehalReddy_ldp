import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { TABLE_HEADERS } from "../../../utils/constants";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {TABLE_HEADERS.map((header) => (
          <TableCell key={header}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;