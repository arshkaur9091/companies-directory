import React from "react";
import { TextField, MenuItem } from "@mui/material";

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}

const DropdownFilter: React.FC<Props> = ({
  label,
  value,
  setValue,
  options,
}) => (
  <TextField
    select
    label={label}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    sx={{ minWidth: 150 }}
  >
    <MenuItem value="">All</MenuItem>
    {options.map((opt) => (
      <MenuItem key={opt} value={opt}>
        {opt}
      </MenuItem>
    ))}
  </TextField>
);

export default DropdownFilter;
