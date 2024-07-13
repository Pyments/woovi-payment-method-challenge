import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import PixPadrao from "../components/PixPadrao";
import HeaderLogo from "../components/HearderLogo";
import PixParcelado from "../components/PixParcelado";

function PaymentMethod() {
  return (
    <Container >
      <HeaderLogo />
      <Typography
        variant="h2"
        sx={{ textAlign: "center", my: 5 }}
        className="title"
      >
        Como deseja efetuar o pagamento?
      </Typography>
      <Box sx={{ width: 1, alignItems: "center", display: "flex", flexDirection: "column" }} component={"section"}>
        <FormControl className="pix">
          <RadioGroup aria-labelledby="Pix" name="pix-buttons-group">
            <Box sx={{ position: "relative", marginBottom: "30px" }}>
              <Box
                sx={{
                  top: "-16px",
                  marginLeft: "10px",
                  bgColor: "#e5e5e5",
                  padding: "5px 16px",
                  position: "absolute",
                  borderRadius: "100px",
                  backgroundColor: "#E5E5E5",
                }}
              >
                <FormLabel
                  sx={{ color: "#4d4d4d", fontSize: "18px", fontWeight: 800 }}
                >
                  Pix
                </FormLabel>
              </Box>
              <PixPadrao />
            </Box>
            <Box sx={{ position: "relative", marginBottom: "30px" }}>
              <Box
                component={"span"}
                sx={{
                  top: "-16px",
                  marginLeft: "10px",
                  padding: "5px 16px",
                  position: "absolute",
                  borderRadius: "100px",
                  backgroundColor: "#E5E5E5",
                }}
              >
                <FormLabel
                  sx={{ color: "#4d4d4d", fontSize: "18px", fontWeight: 800 }}
                >
                  Pix Parcelado
                </FormLabel>
              </Box>
              <PixParcelado />
            </Box>
          </RadioGroup>
        </FormControl>
        <Container
          sx={{ width: "max-content", alignItems: "center", mb: 5, mt: 3 }}
        >
          <Link to={"/credit-card"}>
            <Button variant="contained" sx={{ px: 5, py: 2, w: 1 }}>
              Efetuar pagamento
            </Button>
          </Link>
        </Container>
      </Box>
      <Footer />
    </Container>
  );
}

export default PaymentMethod;
