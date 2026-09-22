import Stack from "@mui/material/Stack";

import Slider from "../../atoms/Slider";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import styles from "./styles";
import {
  SUMMARY_SLIDER_LABEL,
  SUMMARY_SLIDER_RESET_LABEL,
  SUMMARY_SLIDER_SELECTED_OF,
} from "../../../utils/constants";

interface SummarySliderProps {
  value: number;
  onChange: (value: number) => void;
  onReset: () => void;
  selected: number;
  total: number;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const SummarySlider = ({ value, onChange, onReset, selected, total }: SummarySliderProps) => {
  return (
    <Stack spacing={1}>
      <Stack direction="row" sx={styles.header}>
        <Typography variant="body2" color="text.secondary">
          {SUMMARY_SLIDER_LABEL}
        </Typography>
        <Button variant="text" onClick={onReset} disabled={selected === 0}>
          {SUMMARY_SLIDER_RESET_LABEL}
        </Button>
      </Stack>

      <Slider value={value} onChange={onChange} />

      <Typography variant="body2" color="text.secondary">
        {money(selected)} {SUMMARY_SLIDER_SELECTED_OF} {money(total)}
      </Typography>
    </Stack>
  );
};

export default SummarySlider;