import "../styles/Footer.css";
import Shield from "../assets/shield_sm.svg";
import WooviSmall from "../assets/wooviLogo_sm.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__image" src={Shield}></img>
      <span className="footer__text">Pagamento 100% seguro via</span>
      <img className="footer__image" src={WooviSmall}></img>
    </div>
  );
}

export default Footer;
