import PixPadrao from "../components/PixPadrao";
import WooviLogo from "../assets/wooviLogo_md.svg";
import PixParcelado from "../components/PixParcelado";
import "../styles/PaymentMethod.css";

function PaymentMethod() {
  return (
    <>
      <section className="Payment">
        <img src={WooviLogo}></img>
        <PixPadrao />
        <PixParcelado/>
      </section>
    </>
  );
}

export default PaymentMethod;
