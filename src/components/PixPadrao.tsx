import PixCard from "./PixCard";

function PixPadrao() {
  return (
    <div className="pixRadio">
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
