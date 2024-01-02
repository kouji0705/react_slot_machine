import React from "react";
import Box from "@mui/material/Box";

type ReelProps = {
  symbol: string;
};

export const Reel: React.FC<ReelProps> = ({ symbol }) => {
  return (
    <Box
      sx={{
        fontSize: "2rem",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      {symbol}
    </Box>
  );
};
