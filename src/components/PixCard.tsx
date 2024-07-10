import { FormControlLabel, Radio } from "@mui/material";

interface IPixCard {
  title: string;
  label: string;
  price: number;
  tag: string;
}

function PixCard({ label, price, tag }: IPixCard) {
  return (
    <div>
      <FormControlLabel value={label} control={<Radio />} label={price} />
      <div className="pixRadio__discountTag">{tag}</div>
    </div>
  );
}

export default PixCard;
