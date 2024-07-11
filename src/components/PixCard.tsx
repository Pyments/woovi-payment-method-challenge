import { FormControlLabel, Radio } from "@mui/material";

interface IPixCard {
  i: number;
  tag: string;
  price: number;
  cashback: number;
}

function PixCard({ i, price, tag, cashback }: IPixCard) {
  return (
    <div className="pixRadio__card">
      <span className="pixRadio__cashback">{cashback > 0 ? cashback : ""}</span>
      <span className="pixRadio__discountTag">{tag}</span>
      <FormControlLabel labelPlacement={"start"} value={i} control={<Radio />} label={price} />
    </div>
  );
}

export default PixCard;
