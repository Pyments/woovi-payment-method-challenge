import {
  Grid,
  Select,
  Button,
  MenuItem,
  Container,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";

import Footer from "../components/Footer";

import HeaderLogo from "../components/HearderLogo";
import Info from "../components/Info";

function PixCreditCard() {
  return (
    <Container>
      <HeaderLogo />
      <Typography variant="h2" sx={{ textAlign: "center", my: 5 }}>
        Como deseja efetuar o pagamento?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={"Nome completo"}></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField fullWidth label={"CPF"}></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField fullWidth label={"Número do cartão"}></TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField fullWidth label={"Vencimento"}></TextField>
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField fullWidth label={"CVV"}></TextField>
        </Grid>
        <Grid item xs={6} md={8}>
          <FormControl fullWidth>
            <InputLabel id="parcelas">Parcelas</InputLabel>
            <Select id="parcelas" value={"1x de R$ 15.300,00"}>
              <MenuItem sx={{ color: "#000000" }}>1x de R$ 15.300,00</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              py: 1.5,
              minWidth: "60%",
              margin: "0 auto",
              borderRadius: "8px",
              justifySelf: "center",
            }}
          >
            Pagar
          </Button>
        </Grid>
        <Info />
      </Grid>
      <Footer />
    </Container>
  );
}
export default PixCreditCard;
