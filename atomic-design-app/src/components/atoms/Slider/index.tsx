import MuiSlider from "@mui/material/Slider";
import type { SxProps, Theme } from "@mui/material/styles";

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  sx?: SxProps<Theme>;
}

const Slider = ({ value, min = 0, max = 100, onChange, sx }: SliderProps) => {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <MuiSlider
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
      sx={sx}
    />
  );
};

export default Slider;