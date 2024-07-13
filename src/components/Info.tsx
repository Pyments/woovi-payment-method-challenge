import {
  Box,
  Grid,
  Step,
  Stepper,
  Accordion,
  StepLabel,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Info() {
  return (
    <Container sx={{ my: 2 }}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography>Prazo de pagamento</Typography>
        <Typography variant="h6">15/12/2021 - 08:17</Typography>
      </Grid>
      <Stepper orientation="vertical">
        <Step>
          <StepLabel>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: "left" }}>1° entrada no íx</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: "right" }}>R$ 15.300,00</Typography>
              </Grid>
            </Grid>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: "left" }}>2° no cartão</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: "right" }}>R$ 15.300,00</Typography>
              </Grid>
            </Grid>
          </StepLabel>
        </Step>
      </Stepper>

      <Box
        sx={{
          my: 1,
          py: 1.7,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBlock: "1px solid #B2B2B2",
        }}
      >
        <Typography sx={{ textAlign: "left" }}>CET: 0,5%</Typography>
        <Typography sx={{ textAlign: "right" }}>Total: R$ 31.500,00</Typography>
      </Box>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Accordion square elevation={0}>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography>Como funciona?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              eius quod fugiat, labore eveniet deleniti reprehenderit repellat
              quam! Illum accusantium cumque temporibus excepturi,
              necessitatibus tempore asperiores dolorem quo nihil animi.
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid>
          <Typography sx={{ textAlign: "center", width: 1, mt: 4 }}>
            Identificador:
          </Typography>
          <Typography component="p" variant="h6" sx={{ textAlign: "center", textWrap: "wrap"}}>
            2c1b951f356c
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Info;
