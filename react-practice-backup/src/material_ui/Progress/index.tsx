import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

const Progresses = () => {
  return (
    <Stack spacing={3}>
      <CircularProgress />

      <CircularProgress color="secondary" />

      <CircularProgress variant="determinate" value={75} />

      <LinearProgress />

      <LinearProgress color="success" />

      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};

export default Progresses;