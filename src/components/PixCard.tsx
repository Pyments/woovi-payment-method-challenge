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
      <FormControlLabel value={i} control={<Radio />} label={price} />
      <span className="pixRadio__cashback">{cashback}</span>
      <span className="pixRadio__discountTag">{tag}</span>
    </div>
  );
}

export default PixCard;
