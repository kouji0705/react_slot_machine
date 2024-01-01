import React, {useState} from "react";
import {Reel} from "./Reel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {SYMBOLS} from "./const"; // SymbolTileのインポート
import {SymbolTile} from "./type";

export const SlotMachine: React.FC = () => {
  const [coins, setCoins] = useState(100);
  const [reels, setReels] = useState<SymbolTile[]>(Array(3).fill(SYMBOLS[0])); // SymbolTile型の配列

  const handleSpin = () => {
    const newReels = reels.map(
      () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    );
    setReels(newReels);
    setCoins((prev) => prev - 3);
    // 当たり判定
    if (new Set(newReels.map((tile) => tile.id)).size === 1) {
      setCoins((prev) => prev - 3 + 100); // 当たりならコインを追加
    }
  };

  const isWin = new Set(reels.map((tile) => tile.id)).size === 1;

  return (
    <Box sx={{textAlign: "center", marginTop: 4}}>
      <Box>Coinの枚数：{coins}枚</Box>
      <Box sx={{display: "flex", justifyContent: "center", gap: 2}}>
        {reels.map((tile, index) => (
          <Reel key={index} symbol={tile.label} />
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{marginTop: "16px"}}
        onClick={handleSpin}
        disabled={coins < 3}
      >
        スピン
      </Button>
      {isWin && <Box sx={{marginTop: 2}}>勝利！</Box>}
    </Box>
  );
};
