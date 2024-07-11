import { FormLabel } from "@mui/material";
import PixCard from "./PixCard";

function PixPadrao() {
  return (
    <div className="pixRadio">
      <FormLabel className="pixRadio_labelTitle">Pix</FormLabel>

        <PixCard
          i={0}
          price={30500}
          tag={"🤑 R$ 300,00 de volta no seu Pix na hora"}
          cashback={0}
        />

    </div>
  );
}

export default PixPadrao;
