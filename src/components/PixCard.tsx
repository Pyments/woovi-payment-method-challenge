import { FormControlLabel, Radio } from "@mui/material";

interface IPixCard {
  cashback: number;
  price: number;
  tag: string;
}

function PixCard({ price, tag, cashback }: IPixCard) {
  return (
    <div className="pixRadio__card">
      <FormControlLabel value={1} control={<Radio />} label={price} />
      <span className="pixRadio__cashback">{cashback}</span>
      <span className="pixRadio__discountTag">{tag}</span>
    </div>
  );
}

export default PixCard;
