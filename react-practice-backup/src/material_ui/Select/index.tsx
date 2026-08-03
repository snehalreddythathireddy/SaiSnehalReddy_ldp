import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
  { value: "GBP", label: "£" },
  { value: "INR", label: "₹" },
];

const Selects = () => {
  const [currency, setCurrency] = useState("EUR");

  return (
    <div>
      <TextField
        select
        label="Select Currency"
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
        helperText="Please select your currency"
        sx={{ width: 250 }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <p>Selected Currency: {currency}</p>
    </div>
  );
};

export default Selects;