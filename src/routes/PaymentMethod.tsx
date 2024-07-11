import "../styles/PaymentMethod.css";

import { FormControl, FormLabel, RadioGroup } from "@mui/material";

import PixPadrao from "../components/PixPadrao";
import HeaderLogo from "../components/HearderLogo";
import PixParcelado from "../components/PixParcelado";


function PaymentMethod() {
  return (
    <>
      <HeaderLogo />
      <section className="payment">
        <FormControl className="pixRadio">
          <FormLabel className="pixRadio_labelTitle">Pix Parcelado</FormLabel>
          <RadioGroup
            aria-labelledby="Pix"
            defaultValue={0}
            name="radio-buttons-group"
          >
            <PixPadrao />
            <PixParcelado />
          </RadioGroup>
        </FormControl>
      </section>
    </>
  );
}

export default PaymentMethod;
