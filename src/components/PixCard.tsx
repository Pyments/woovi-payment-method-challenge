import "../styles/components/PixCard.css";
import { Radio } from "@mui/material";

interface IPixCard {
  i: number;
  price: number;
  tag?: string | undefined;
  total?: boolean | undefined;
  cashback?: number | undefined;
}

function PixCard({ i, price, tag, cashback, total }: IPixCard) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <span className="card__tranche">
          {i}x <span className="card__price">{price.toFixed(2)}</span>
        </span>
        {total && (
          <span className="card__total">Total: {(price * i).toFixed(2)}</span>
        )}
        {cashback && (
          <span className="card__cashback">{`Ganhe ${cashback}% de Cashback`}</span>
        )}
        {tag && <span className="card__tag">{tag}</span>}
      </div>
      <Radio value={i} className="card__radio" />
    </div>
  );
}

export default PixCard;
