import { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const Snackbars = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Show Snackbar
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Data saved successfully!"
      />
    </>
  );
};

export default Snackbars;