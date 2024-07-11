import { Box } from "@mui/material";

import PixCard from "./PixCard";

function PixPadrao() {
  return (
    <Box
    sx={{
      borderRadius: "10px",
      border: "2px solid #e5e5e5",
    }}>
      <PixCard
        i={1}
        price={30500}
        tag={"🤑 R$ 300,00 de volta no seu Pix na hora"}
        cashback={3}
        total={false}
      />
    </Box>
  );
}

export default PixPadrao;
