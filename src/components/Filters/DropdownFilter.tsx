import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
