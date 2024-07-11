import { Box } from "@mui/material";
import WooviLogo from "../assets/wooviLogo_md.svg";

function HeaderLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "clamp(20px, 40vw, 40px) 0px",
        marginTop: "clamp(10px, 40vw, 20px)",
      }}
      className="logo"
    >
      <Box
        component="img"
        sx={{
          margin: "auto",
          width: "clamp(100px, 40vw, 200px)",
        }}
        className="logo__image"
        src={WooviLogo}
      ></Box>
    </Box>
  );
}

export default HeaderLogo;
