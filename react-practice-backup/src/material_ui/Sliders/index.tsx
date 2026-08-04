import { useState } from "react";
import Slider from "@mui/material/Slider";

const Sliders = () => {
  const [value, setValue] = useState<number>(30);

  return (
    <div style={{ width: 300 }}>
      <Slider
        value={value}
        onChange={(event, newValue) =>
          setValue(newValue as number)
        }
        min={0}
        max={100}
        step={10}
        valueLabelDisplay="auto"
      />

      <p>Value: {value}</p>
    </div>
  );
};

export default Sliders;