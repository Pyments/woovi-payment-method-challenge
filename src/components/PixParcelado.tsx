import { FormLabel } from "@mui/material";
import PixCard from "./PixCard";

function PixPadrao() {
  return (
    <>
      <div className="pixRadio">
        <FormLabel className="pixRadio_labelTitle">Pix Parcelado</FormLabel>
        <PixCard i={1} price={15300} tag={" "} cashback={0} />
        <PixCard i={2} price={10196.66} tag={" "} cashback={0} />
        <PixCard
          i={3}
          price={7725.0}
          tag={"-3% de juros: Melhor opção de parcelamento"}
          cashback={0}
        />
        <PixCard i={4} price={6300.0} tag={" "} cashback={0} />
        <PixCard i={5} price={5283.33} tag={" "} cashback={0} />
        <PixCard i={6} price={4542.85} tag={" "} cashback={0} />
      </div>
    </>
  );
}

export default PixPadrao;
