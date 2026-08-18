import { useState, useMemo, useEffect, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Typography from "../../atoms/Typography";

import DashboardLayout from "../../templates/DashboardLayout";
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import ContractsTable from "../../organisms/ContractsTable";
import SummaryCard from "../../organisms/SummaryCard";
import { getContracts } from "../../../api/contracts";
import { getCurrentUser } from "../../../api/user";
import styles from "./styles";
import type { Contract } from "../../../types/contract";
import type { User } from "../../../types/user";
import {
  NEW_CASH_KICK_PAGE_TITLE,
  NEW_CASH_KICK_PAGE_SUBTITLE,
  NEW_CASH_KICK_PAGE_REVIEW_ALERT_PREFIX,
  NEW_CASH_KICK_PAGE_LOADING_LABEL,
  NEW_CASH_KICK_PAGE_ERROR_LABEL,
} from "../../../utils/constants";

const NewCashKickPage = () => {
  const [nav, setNav] = useState<"home" | "cash">("cash");
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const [fetchedContracts, fetchedUser] = await Promise.all([getContracts(), getCurrentUser()]);
        if (isMounted) {
          setContracts(fetchedContracts);
          setCurrentUser(fetchedUser);
        }
      } catch (error) {
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalAvailable = useMemo(() => contracts.reduce((sum, c) => sum + c.availableCredit, 0), [contracts]);
  const selectedSum = useMemo(
    () => contracts.filter((c) => selectedIds.includes(c.id)).reduce((sum, c) => sum + c.availableCredit, 0),
    [contracts, selectedIds]
  );

  useEffect(() => {
    if (totalAvailable > 0) {
      setSliderValue(Math.round((selectedSum / totalAvailable) * 100));
    }
  }, [selectedSum, totalAvailable]);

  const handleToggle = useCallback((id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const handleToggleAll = useCallback(() => {
    setSelectedIds((prev) => (prev.length === contracts.length ? [] : contracts.map((c) => c.id)));
  }, [contracts]);

  const handleSliderChange = useCallback(
    (val: number) => {
      setSliderValue(val);
      const target = (val / 100) * totalAvailable;
      let running = 0;
      const next: number[] = [];
      for (const c of contracts) {
        if (running >= target) break;
        running += c.availableCredit;
        next.push(c.id);
      }
      setSelectedIds(next);
    },
    [contracts, totalAvailable]
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

  if (isLoading) {
    return (
      <DashboardLayout sidebar={<Sidebar active={nav} onNavigate={setNav} onWatchHowTo={handleWatchHowTo} />}>
        <Typography variant="body1">{NEW_CASH_KICK_PAGE_LOADING_LABEL}</Typography>
      </DashboardLayout>
    );
  }

  if (hasError || !currentUser) {
    return (
      <DashboardLayout sidebar={<Sidebar active={nav} onNavigate={setNav} onWatchHowTo={handleWatchHowTo} />}>
        <Typography variant="body1">{NEW_CASH_KICK_PAGE_ERROR_LABEL}</Typography>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      sidebar={<Sidebar active={nav} onNavigate={setNav} onWatchHowTo={handleWatchHowTo} />}
    >
      <Header
        title={NEW_CASH_KICK_PAGE_TITLE}
        subtitle={NEW_CASH_KICK_PAGE_SUBTITLE}
        onBack={handleBack}
        user={currentUser}
      />

      <Stack direction="row" spacing={2.5} sx={styles.content}>
        <ContractsTable
          contracts={contracts}
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