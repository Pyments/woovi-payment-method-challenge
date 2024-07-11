import { Box, Radio } from "@mui/material";

interface IPixCard {
  i: number;
  price: number;
  tag?: string | undefined;
  total?: boolean | undefined;
  cashback?: number | undefined;
}

function PixCard({ i, price, tag, cashback, total }: IPixCard) {
  return (
    <Box
      sx={{
        px: 2,
        pt: 3,
        pb: 2,
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="span"
          sx={{
            width: 1,
            fontWeight: 800,
            fontSize: "24px",
          }}
        >
          {i}x{" "}
          <Box
            component="span"
            sx={{
              ml: 0,
              fontSize: "24px",
              fontWeight: 500,
            }}
          >
            {price.toFixed(2)}
          </Box>
        </Box>
        {total && (
          <Box
            component="span"
            sx={{
              width: 1,
              fontSize: "16px",
              color: "text.disabled",
            }}
          >
            Total: {(price * i).toFixed(2)}
          </Box>
        )}
        {cashback && (
          <Box
            sx={{
              width: 1,
              color: "primary.main",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >{`Ganhe ${cashback}% de Cashback`}</Box>
        )}
        {tag && (
          <Box
            sx={{
              color: "#ffffff",
              borderRadius: "5px",
              position: "relative",
              padding: "7px 30px 5px 7px",
              bgcolor: "secondary.main",
              ":after": {
                content: "''",
                top: 0,
                right: "-2px",
                width: "20px",
                height: 1,
                position: "absolute",
                pointerEvents: "none",
                backgroundColor: "#ffffff",
                clipPath: "polygon(102% 0, 102% 100%, 0 50%, 100% 0)",
                shapeOutside: "polygon(102% 0, 102% 100%, 0 50%, 100% 0)",
              }
            }}
            className="card__tag"
          >
            {tag}
          </Box>
        )}
      </Box>
      <Radio value={i} className="card__radio" />
    </Box>
  );
}

export default PixCard;
