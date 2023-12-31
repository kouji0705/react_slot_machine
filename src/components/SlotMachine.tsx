import React, { useState } from "react";
import { Reel } from "./Reel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const symbols = ["🍒", "🍋", "🍊", "🍇", "🍉"];

export const SlotMachine: React.FC = () => {
  const [reels, setReels] = useState(Array(3).fill(symbols[0]));

  const spinReels = () => {
    setReels(
      reels.map(() => symbols[Math.floor(Math.random() * symbols.length)])
    );
  };

  const isWin = new Set(reels).size === 1;

  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {reels.map((symbol, index) => (
          <Reel key={index} symbol={symbol} />
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "16px" }}
        onClick={spinReels}
      >
        スピン
      </Button>
      {isWin && <Box sx={{ marginTop: 2 }}>勝利！</Box>}
    </Box>
  );
};
