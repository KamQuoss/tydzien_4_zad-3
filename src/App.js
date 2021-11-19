import { Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./Form";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <Typography component="h1" variant="h3">
          Zadanie 3
        </Typography>
        <Typography component="h2" variant="h5">
          Formularz z React Hook Form i MUI
        </Typography>
        <Form />
      </Container>
    </ThemeProvider>
  );
}