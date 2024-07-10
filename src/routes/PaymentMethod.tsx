import Pix_default from "../components/PixPadrao";
import WooviLogo from "../assets/wooviLogo_md.svg";

function PaymentMethod() {
  return (
    <>
      <img src={WooviLogo}></img>
      <Pix_default />
    </>
  );
}

export default PaymentMethod;
