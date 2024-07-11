import "../styles/PaymentMethod.css";

import { Button, FormControl, FormLabel, RadioGroup } from "@mui/material";

import Footer from "../components/Footer";
import PixPadrao from "../components/PixPadrao";
import HeaderLogo from "../components/HearderLogo";
import PixParcelado from "../components/PixParcelado";
import { Link } from "react-router-dom";

function PaymentMethod() {
  return (
    <>
      <HeaderLogo />
      <h1 className="title">Como deseja efetuar o pagamento?</h1>
      <section className="payment">
        <FormControl className="pix">
          <RadioGroup aria-labelledby="Pix" name="pix-buttons-group">
            <div className="pix__column">
              <span className="pix__title__bubble">
                <FormLabel className="pix__title">Pix</FormLabel>
              </span>
              <PixPadrao />
            </div>
            <div className="pix__column">
              <span className="pix__title__bubble">
                <FormLabel className="pix__title">Pix Parcelado</FormLabel>
              </span>
              <PixParcelado />
            </div>
          </RadioGroup>
        </FormControl>
        <Link to={"/credit-card"}>
          <Button>Efetuar pagamento</Button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default PaymentMethod;
