import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import App from "./App";

<ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
</ThemeProvider>