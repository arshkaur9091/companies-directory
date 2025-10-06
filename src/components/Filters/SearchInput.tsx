import React from "react";
import TextField from "@mui/material/TextField";
import { STRINGS } from "../../constants/strings";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ search, setSearch }) => (
  <TextField
    label={STRINGS.filters.searchPlaceholder}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{ minWidth: 250 }}
  />
);

export default SearchInput;
