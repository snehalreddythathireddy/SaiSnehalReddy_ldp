import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import type { SxProps, Theme } from "@mui/material/styles";

const headers = [
  "NAME",
  "ADJUDICATION",
  "STATUS",
  "LOCATION",
  "DATE",
];

const styles: Record<string, SxProps<Theme>> = {
  cell: {
    bgcolor: "#F9FAFB",
  },
};

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header}
            sx={styles.cell}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;