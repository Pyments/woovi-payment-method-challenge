import { Box, Button, Container, Typography } from "@mui/material";

import FileCopyIcon from "@mui/icons-material/FileCopy";

import Info from "../components/Info";
import Footer from "../components/Footer";
import HeaderLogo from "../components/HearderLogo";

import QR_example from "../assets/QR_example.png";

function PixQr() {
  return (
    <Container>
      <HeaderLogo />
      <Typography variant="h2" sx={{ textAlign: "center", my: 5 }}>
        Pague a entrada de R$ VALOR pelo pix
      </Typography>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Box
          component="img"
          src={QR_example}
          sx={{
            mx: "auto",
            width: 1,
            padding: "8px",
            maxWidth: "400px",
            border: "2px solid",
            objectFit: "contain",
            borderRadius: "10px",
            borderColor: "primary.main",
          }}
        />
      </Container>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            py: 1.5,
            margin: "0 auto",
            borderRadius: "8px",
            justifySelf: "center",
          }}
        >
          Clique para copiar o QR CODE
          <FileCopyIcon />
        </Button>
      </Container>
      <Info />
      <Footer />
    </Container>
  );
}
export default PixQr;
