import { useMemo } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import Divider from "../../atoms/Divider";
import Button from "../../atoms/Button";
import SummarySlider from "../../molecules/SummarySlider";
import styles from "./styles";
import {
  SUMMARY_CARD_TITLE,
  SUMMARY_CARD_INFO_ALT,
  SUMMARY_CARD_TERM_LABEL,
  SUMMARY_CARD_TERM_UNIT,
  SUMMARY_CARD_SELECTED_CONTRACTS_LABEL,
  SUMMARY_CARD_PAYBACK_LABEL,
  SUMMARY_CARD_RATE_LABEL,
  SUMMARY_CARD_TOTAL_PAYOUT_LABEL,
  SUMMARY_CARD_REVIEW_BUTTON_LABEL,
} from "../../../utils/constants";
import infoCircleIcon from "../../../assets/icons/info-circle.svg";

interface SummaryCardProps {
  term: number;
  selectedCount: number;
  sliderValue: number;
  onSliderChange: (value: number) => void;
  onReset: () => void;
  selectedSum: number;
  totalAvailable: number;
  rate: number;
  onReview: () => void;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const SummaryRow = ({ label, value }: { label: string; value: string | number }) => (
  <Stack direction="row" sx={styles.summaryRow}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" color="text.primary">{value}</Typography>
  </Stack>
);

const SummaryCard = ({
  term,
  selectedCount,
  sliderValue,
  onSliderChange,
  onReset,
  selectedSum,
  totalAvailable,
  rate,
  onReview,
}: SummaryCardProps) => {
  const payback = useMemo(() => selectedSum * (1 + rate / 100), [selectedSum, rate]);
  const fee = payback - selectedSum;

  return (
    <Paper sx={styles.card}>
      <Stack direction="row" spacing={1} sx={styles.header}>
        <Typography variant="h4" color="text.primary">{SUMMARY_CARD_TITLE}</Typography>
        <Icon src={infoCircleIcon} size={14} alt={SUMMARY_CARD_INFO_ALT} />
      </Stack>

      <SummaryRow label={SUMMARY_CARD_TERM_LABEL} value={`${term} ${SUMMARY_CARD_TERM_UNIT}`} />
      <SummaryRow label={SUMMARY_CARD_SELECTED_CONTRACTS_LABEL} value={selectedCount} />

      <Box sx={styles.sliderWrapper}>
        <SummarySlider
          value={sliderValue}
          onChange={onSliderChange}
          onReset={onReset}
          selected={selectedSum}
          total={totalAvailable}
        />
      </Box>

      <Divider spacing={2} />

      <SummaryRow label={SUMMARY_CARD_PAYBACK_LABEL} value={money(payback)} />
      <SummaryRow label={SUMMARY_CARD_RATE_LABEL} value={`(${rate.toFixed(2)}%) ${money(fee)}`} />

      <Divider spacing={2} />

      <Stack direction="row" sx={styles.totalRow}>
        <Typography variant="body2" color="text.secondary">
          {SUMMARY_CARD_TOTAL_PAYOUT_LABEL}
        </Typography>
        <Typography variant="h3" color="text.primary">{money(selectedSum)}</Typography>
      </Stack>

      <Button variant="contained" onClick={onReview} disabled={selectedCount === 0} fullWidth>
        {SUMMARY_CARD_REVIEW_BUTTON_LABEL}
      </Button>
    </Paper>
  );
};

export default SummaryCard;