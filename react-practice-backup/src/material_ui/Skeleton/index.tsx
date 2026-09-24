import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Skeletons = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="text" width={200} />

      <Skeleton variant="rectangular" width={250} height={120} />

      <Skeleton variant="rounded" width={250} height={120} />

      <Skeleton variant="circular" width={60} height={60} />
    </Stack>
  );
};

export default Skeletons;