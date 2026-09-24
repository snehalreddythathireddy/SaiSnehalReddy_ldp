import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Backdrops = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Backdrop
      </Button>

      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Backdrops;