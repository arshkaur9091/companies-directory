import React, { useState } from "react";
import { useCompanies } from "../api/companyApi";
import { Company } from "../types/company";
import Loader from "../components/Loader";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import { SearchInput, DropdownFilter } from "../components/Filters";
import { Pagination, Box, Select, MenuItem } from "@mui/material";
import { useDebounce } from "../hooks/useCompanies";
import { STRINGS } from "../constants/strings";

const Companies: React.FC = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const limit = 5;

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, error } = useCompanies({
    page,
    limit,
    search: debouncedSearch,
    industry,
    location,
    sort,
  });

  const companiesData = data?.data ?? [];
  const totalCount = data?.total ?? 0;

  const industries: string[] = Array.from(
    new Set(companiesData.map((c) => c.industry))
  );
  const locations: string[] = Array.from(
    new Set(companiesData.map((c) => c.location))
  );

  companiesData.map((c: Company) => <CompanyCard key={c.id} company={c} />);
  const totalPages = Math.ceil(totalCount / limit);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading companies</p>;

  return (
    <Box p={2}>
      <h1>{STRINGS.pages.companiesTitle}</h1>
      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
        <SearchInput search={search} setSearch={setSearch} />
        <DropdownFilter
          label={STRINGS.filters.industryLabel}
          value={industry}
          setValue={setIndustry}
          options={industries}
        />
        <DropdownFilter
          label={STRINGS.filters.locationLabel}
          value={location}
          setValue={setLocation}
          options={locations}
        />
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value as "asc" | "desc")}
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="asc">
            {STRINGS.filters.sortLabel} {STRINGS.filters.sortOptions.asc}
          </MenuItem>
          <MenuItem value="desc">
            {STRINGS.filters.sortLabel} {STRINGS.filters.sortOptions.desc}
          </MenuItem>
        </Select>
      </Box>

      {data?.data.map((c: Company) => (
        <CompanyCard key={c.id} company={c} />
      ))}

      {totalPages > 1 && (
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, val) => setPage(val)}
          />
        </Box>
      )}
    </Box>
  );
};

export default Companies;
