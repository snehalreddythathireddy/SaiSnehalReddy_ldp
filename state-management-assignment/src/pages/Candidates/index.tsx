import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import CandidateTable from "../../components/organisms/CandidateTable";
import Pagination from "../../components/organisms/Pagination";

import SearchBar from "../../components/molecules/SearchBar";
import FilterDropdown from "../../components/molecules/FilterDropdown";

import Typography from "../../components/atoms/Typography";
import styles from "./styles";

import { candidates } from "../../mocks/candidates";
import type { Candidate } from "../../types/candidate";
import { CANDIDATES_PAGE_CARD_TITLE } from "../../utils/constants";

const Candidates = () => {
  const [search, setSearch] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("All Status");
  const [adjudication, setAdjudication] = useState<string>("All");
  const [candidateList, setCandidateList] = useState<Candidate[]>(candidates);

  useEffect(() => {
    if (status === "All Status") {
      setCandidateList(candidates);
    } else {
      const filtered = candidates.filter(
        (candidate) => candidate.status.toLowerCase() === status.toLowerCase()
      );
      setCandidateList(filtered);
    }
  }, [status]);

  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box sx={styles.content}>
        <Header />

        <Box sx={styles.card}>
          <Box sx={styles.cardHeader}>
            <Typography variant="h6">{CANDIDATES_PAGE_CARD_TITLE}</Typography>

            <SearchBar search={search} onSearchChange={setSearch} onFilterClick={handleToggleFilter} />
          </Box>

          {showFilter && (
            <Box sx={styles.filter}>
              <FilterDropdown
                status={status}
                setStatus={setStatus}
                adjudication={adjudication}
                setAdjudication={setAdjudication}
              />
            </Box>
          )}

          <CandidateTable candidates={candidateList} />
          <Pagination />
        </Box>
      </Box>
    </Box>
  );
};

export default Candidates;