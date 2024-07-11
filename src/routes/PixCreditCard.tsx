import "../styles/PixCreditCard.css";

import {
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import HeaderLogo from "../components/HearderLogo";

function PixCreditCard() {
  return (
    <>
      <HeaderLogo />
      <PageTitle title={"Pague o restante em x no cartão"} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label={"Nome completo"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label={"CPF"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label={"Número do cartão"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label={"Vencimento"}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label={"CVV"}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label={"Parcelas"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button>Pagar</Button>
        </Grid>
        <Grid item xs={12}>
          <span>Prazo de pagamento</span>
          <span>15/12/2021 - 08:17</span>
        </Grid>
        <Grid item xs={12}>
          <Stepper orientation="vertical">
            <Step>
              <StepLabel>
                <span>1° entrada no Pix</span>
                <span>R$ 00000</span>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
                <span>2° no cartão</span>
                <span>R$ 00000</span>
              </StepLabel>
            </Step>
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          <span>CET: 0,5%</span>
          <span>Total: R$ 31.500</span>
        </Grid>
        <Grid item xs={12}>
          <h3>Como funciona?</h3>
        </Grid>
      </Grid>
      <span>
        <div>Identificador:</div>
        <span>1298r79y127896dah712908few7h8w</span>
      </span>
      <Footer />
    </>
  );
}
export default PixCreditCard;
