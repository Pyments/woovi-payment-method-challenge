import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  
  function PixPadrao() {
    return (
      <FormControl className="pixRadio">
        <FormLabel className="pixRadio_labelTitle">Pix</FormLabel>
        <RadioGroup
          aria-labelledby="Pix valor padrão"
          defaultValue={0}
          name="radio-buttons-group"
        >
          <div>
            <FormControlLabel value={1} control={<Radio />} label="1x R$ 3.500" />
            <div className="pixRadio__discountTag">
              🤑 R$ 300,00 de volta no seu Pix na hora
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    );
  }
  
  export default PixPadrao;
  