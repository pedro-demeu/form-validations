import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CopyrightIcon from "@material-ui/icons/Copyright";
import {
  Button,
  Box,
  Typography,
  createTheme,
  MuiThemeProvider,
  Link,
  Container,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
const useStyles = makeStyles((theme) => ({
  primary: {
    color: "#FFFFFF",
  },
  containerForm: {
    background: "#292929",
    height: "100vh",
    padding: "2rem 5rem",
  },
  inputForm: {
    width: "100%",
    margin: "1.5rem 0",
    background: "#303030",
    borderRadius: "5px",
  },
  footerForm: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  headerForm: {
    margin: "2rem 0",
    textAlign: "center",
  },
  text: {
    color: "#FFC933",
    fontWeight: "normal",
    fontFamily: "roboto",
  },
  linkGithub: {
    color: "#FFC933",
    fontWeight: "normal",
    fontFamily: "roboto",
    display: "flex",
    alignSelf: "center",
    textDecoration: "none",
    paddingRight: "1rem",
  },
  copyRight: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "5rem",
  },
}));

function App() {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC933",
      },
    },
  });
  const phoneRegExp = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/;

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().integer(),
    tel: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    msg: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      tel: "",
      msg: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(
        `Muito bem ${values.name} o formulário foi validado com sucesso! \n Segue seus dados validados:\n
        Email: ${values.email}\n
        Idade: ${values.age}\n
        Telefone: ${values.tel}\n
        Mensagem: ${values.msg}\n`
      );
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="md">
        <form
          className={classes.containerForm}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Box className={classes.headerForm}>
            <Typography className={classes.text} variant="h2" component="h1">
              Área de contato
            </Typography>
            <Typography
              className={classes.text}
              variant="subtitle1"
              component="h2"
            >
              Formulário de validação utilizando React | Typescript | Yup |
              Formik | Material UI
            </Typography>
          </Box>
          <Box>
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              variant="outlined"
              className={classes.inputForm}
              id="name"
              name="name"
              label="Nome Completo"
              autoFocus
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Box>
          <Box>
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              variant="outlined"
              className={classes.inputForm}
              id="email"
              name="email"
              label="E-mail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
          </Box>
          <Box>
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              variant="outlined"
              className={classes.inputForm}
              id="age"
              name="age"
              label="Idade"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              helperText={formik.touched.age && formik.errors.age}
              error={formik.touched.age && Boolean(formik.errors.age)}
            />
          </Box>
          <Box>
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              variant="outlined"
              className={classes.inputForm}
              id="tel"
              name="tel"
              label="Número do Whatsapp"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tel}
              helperText={formik.touched.tel && formik.errors.tel}
              error={formik.touched.tel && Boolean(formik.errors.tel)}
            />
          </Box>
          <Box>
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              variant="outlined"
              className={classes.inputForm}
              id="msg"
              name="msg"
              label="Mensagem"
              multiline
              type="text"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.msg}
              helperText={formik.touched.msg && formik.errors.msg}
              error={formik.touched.msg && Boolean(formik.errors.msg)}
            />
          </Box>

          <Box className={classes.footerForm}>
            <Typography variant="subtitle2" component="h3">
              <Link
                href="https://github.com/programecompedro/contact-form-advanced"
                className={classes.linkGithub}
                target="_blank"
              >
                Código fonte no Github &nbsp;&nbsp;
                <ExitToAppIcon />
              </Link>
            </Typography>
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </Box>
          <Box className={classes.copyRight}>
            <Typography variant="subtitle2" component="h4">
              <Link
                href="http://www.github.com/programecompedro"
                className={classes.linkGithub}
                target="_blank"
              >
                programecompedro &nbsp;&nbsp;
                <CopyrightIcon />
              </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
