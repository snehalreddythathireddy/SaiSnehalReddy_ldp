import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import CandidateTable from "../../components/organisms/CandidateTable";
import Pagination from "../../components/organisms/Pagination";

import SearchBar from "../../components/molecules/SearchBar";
import FilterDropdown from "../../components/molecules/FilterDropdown";

import Typography from "../../components/atoms/Typography";

import { candidates } from "../../mock/candidates";

const styles: Record<string, SxProps<Theme>> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    bgcolor: "background.default",
  },

  content: {
    flex: 1,
    p: 4,
  },

  card: {
    mt: 3,
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 3,
    position: "relative",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  },

  filter: {
    position: "absolute",
    top: 90,
    right: 20,
    zIndex: 10,
  },
};

const Candidates = () => {
  const [search, setSearch] = useState("");

  const [showFilter, setShowFilter] = useState(false);

  const [status, setStatus] = useState("All Status");

  const [adjudication, setAdjudication] = useState("All");

  const [candidateList, setCandidateList] = useState(candidates);

  useEffect(() => {
    if (status === "All Status") {
      setCandidateList(candidates);
    } else {
      const filtered = candidates.filter(
        (candidate) =>
          candidate.status.toLowerCase() === status.toLowerCase()
      );

      setCandidateList(filtered);
    }
  }, [status]);

  return (
    <Box sx={styles.page}>
      <Sidebar />

      <Box sx={styles.content}>
        <Header />

        <Box sx={styles.card}>
          <Box sx={styles.cardHeader}>
            <Typography variant="h6">
              Candidate Information
            </Typography>

            <SearchBar
              search={search}
              onSearchChange={setSearch}
              onFilterClick={() =>
                setShowFilter(!showFilter)
              }
            />
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