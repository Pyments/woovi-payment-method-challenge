import "../styles/components/HeaderLogo.css";
import WooviLogo from "../assets/wooviLogo_md.svg";

function HeaderLogo() {
  return (
    <div className="logo">
      <img className="logo__image" src={WooviLogo}></img>
    </div>
  );
}

export default HeaderLogo;
