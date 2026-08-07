import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const headers = [
  "NAME",
  "ADJUDICATION",
  "STATUS",
  "LOCATION",
  "DATE",
];

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;