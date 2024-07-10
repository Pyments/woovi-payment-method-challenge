import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import PixCard from "./PixCard";

function PixPadrao() {
  return (
    <FormControl className="pixRadio">
      <FormLabel className="pixRadio_labelTitle">Pix</FormLabel>
      <RadioGroup
        aria-labelledby="Pix valor padrão"
        defaultValue={0}
        name="radio-buttons-group"
      ></RadioGroup>
      [
        
      ]
      <PixCard />
    </FormControl>
  );
}

export default PixPadrao;
