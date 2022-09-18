import React from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import ContactForm from "./ContactForm/ContactForm";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC933",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="md">
        <ContactForm />
      </Container>
    </MuiThemeProvider>
  );
}