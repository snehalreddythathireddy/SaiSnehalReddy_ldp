import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Alerts = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert.</Alert>
      <Alert severity="warning">This is a warning alert.</Alert>
      <Alert severity="info">This is an info alert.</Alert>
      <Alert severity="success">This is a success alert.</Alert>

      <Alert variant="outlined" severity="success">
        Outlined Success
      </Alert>

      <Alert variant="filled" severity="error">
        Filled Error
      </Alert>
    </Stack>
  );
};

export default Alerts;