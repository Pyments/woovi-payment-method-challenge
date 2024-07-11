import "../styles/PaymentMethod.css";

import { FormControl, FormLabel, RadioGroup } from "@mui/material";

import Footer from "../components/Footer";
import PixPadrao from "../components/PixPadrao";
import HeaderLogo from "../components/HearderLogo";
import PixParcelado from "../components/PixParcelado";

function PaymentMethod() {
  return (
    <>
      <HeaderLogo />
      <section className="payment">
        <FormControl className="pix">
          <RadioGroup
            aria-labelledby="Pix"
            defaultValue={0}
            name="pix-buttons-group"
          >
            <div className="pix__column">
              <FormLabel className="pix_title">Pix</FormLabel>
              <PixPadrao />
            </div>
            <div className="pix__column">
              <FormLabel className="pix_title">
                Pix Parcelado
              </FormLabel>
              <PixParcelado />
            </div>
          </RadioGroup>
        </FormControl>
      </section>
      <Footer/>
    </>
  );
}

export default PaymentMethod;
