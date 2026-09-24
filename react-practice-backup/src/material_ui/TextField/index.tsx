import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "INR",
    label: "₹",
  },
];

const TextFields = () => {
  return (
    <div>
      <TextField />

      <br />
      <br />

      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <br />
      <br />

      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
      />

      <br />
      <br />

      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        defaultValue="Standard"
      />

      <br />
      <br />

      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />

      <br />
      <br />

      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
      />

      <br />
      <br />

      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />

      <br />
      <br />

      <TextField
        id="outlined-select-currency"
        select
        label="Select Currency"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Email"
        helperText="Enter a valid email address"
        />
        <TextField
        label="Read Only"
        defaultValue="Cannot edit"
        slotProps={{
            input: {
            readOnly: true,
            },
        }}
        />
        <TextField
        label="Full Width"
        fullWidth
        />
        

    </div>
  );
};

export default TextFields;