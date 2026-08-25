import { useState, useMemo, useEffect, useCallback } from "react";
import Stack from "@mui/material/Stack";

import DashboardLayout from "../../templates/DashboardLayout";
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import ContractsTable from "../../organisms/ContractsTable";
import SummaryCard from "../../organisms/SummaryCard";
import { CONTRACTS } from "../../../mocks/contracts";
import { CURRENT_USER } from "../../../mocks/user";
import styles from "./styles";
import {
  NEW_CASH_KICK_PAGE_TITLE,
  NEW_CASH_KICK_PAGE_SUBTITLE,
  NEW_CASH_KICK_PAGE_REVIEW_ALERT_PREFIX,
} from "../../../utils/constants";

const NewCashKickPage = () => {
  const [nav, setNav] = useState<"home" | "cash">("cash");
  const [selectedIds, setSelectedIds] = useState<number[]>([1, 5]);
  const [sliderValue, setSliderValue] = useState(0);

  const totalAvailable = useMemo(() => CONTRACTS.reduce((sum, c) => sum + c.availableCredit, 0), []);
  const selectedSum = useMemo(
    () => CONTRACTS.filter((c) => selectedIds.includes(c.id)).reduce((sum, c) => sum + c.availableCredit, 0),
    [selectedIds]
  );

  useEffect(() => {
    setSliderValue(Math.round((selectedSum / totalAvailable) * 100));
  }, [selectedSum, totalAvailable]);

  const handleToggle = useCallback((id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const handleToggleAll = useCallback(() => {
    setSelectedIds((prev) => (prev.length === CONTRACTS.length ? [] : CONTRACTS.map((c) => c.id)));
  }, []);

  const handleSliderChange = useCallback(
    (val: number) => {
      setSliderValue(val);
      const target = (val / 100) * totalAvailable;
      let running = 0;
      const next: number[] = [];
      for (const c of CONTRACTS) {
        if (running >= target) break;
        running += c.availableCredit;
        next.push(c.id);
      }
      setSelectedIds(next);
    },
    [totalAvailable]
  );

  const handleReset = useCallback(() => {
    setSelectedIds([]);
    setSliderValue(0);
  }, []);

  const handleBack = useCallback(() => {
    // No-op: this page has no previous step to navigate back to yet.
  }, []);

  const handleWatchHowTo = useCallback(() => {
    window.open("#", "_blank");
  }, []);

  const handleReview = useCallback(() => {
    alert(`${NEW_CASH_KICK_PAGE_REVIEW_ALERT_PREFIX}${selectedSum.toFixed(2)}`);
  }, [selectedSum]);

  return (
    <DashboardLayout
      sidebar={<Sidebar active={nav} onNavigate={setNav} onWatchHowTo={handleWatchHowTo} />}
    >
      <Header
        title={NEW_CASH_KICK_PAGE_TITLE}
        subtitle={NEW_CASH_KICK_PAGE_SUBTITLE}
        onBack={handleBack}
        user={CURRENT_USER}
      />

      <Stack direction="row" spacing={2.5} sx={styles.content}>
        <ContractsTable
          contracts={CONTRACTS}
          selectedIds={selectedIds}
          onToggle={handleToggle}
          onToggleAll={handleToggleAll}
        />
        <SummaryCard
          term={12}
          selectedCount={selectedIds.length}
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange}
          onReset={handleReset}
          selectedSum={selectedSum}
          totalAvailable={totalAvailable}
          rate={12}
          onReview={handleReview}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default NewCashKickPage;