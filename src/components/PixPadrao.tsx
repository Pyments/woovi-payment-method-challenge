import PixCard from "./PixCard";
import "../styles/components/PixWrapper.css";

function PixPadrao() {
  return (
    <div className="pix__wrapper">
      <PixCard
        i={1}
        price={30500}
        tag={"🤑 R$ 300,00 de volta no seu Pix na hora"}
        cashback={3}
        total={false}
      />
    </div>
  );
}

export default PixPadrao;
