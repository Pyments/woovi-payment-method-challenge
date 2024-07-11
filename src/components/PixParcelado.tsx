import PixCard from "./PixCard";

function PixPadrao() {
  return (
    <>
      <div className="pixRadio">
        <PixCard i={2} price={15300} total={true} />
        <PixCard i={3} price={10196.66} total={true} />
        <PixCard
          i={4}
          price={7725.0}
          tag={"-3% de juros: Melhor opção de parcelamento"}
          total={true}
        />
        <PixCard i={5} price={6300.0} total={true} />
        <PixCard i={6} price={5283.33} total={true} />
        <PixCard i={7} price={4542.85} total={true} />
      </div>
    </>
  );
}

export default PixPadrao;
