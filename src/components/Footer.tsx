import Shield from "../assets/shield_sm.svg";
import WooviSmall from "../assets/wooviLogo_sm.svg";
import { Box, Container } from "@mui/material";

function Footer() {
  return (
    <Container
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "row",
        width: "max-content",
        alignItems: "center",
      }}
    >
      <Box component="img" sx={{ mb: 0.3 }} src={Shield} />
      <Box component="p" color="text.disabled" sx={{ px: 1 }}>
        Pagamento 100% seguro via
      </Box>
      <Box component="img" sx={{ mb: 0.3 }} src={WooviSmall} />
    </Container>
  );
}

export default Footer;
