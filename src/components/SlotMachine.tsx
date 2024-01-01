import React, {useState} from "react";
import {Reel} from "./Reel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {BET_COINS, INITIAL_COINS, SYMBOLS} from "./const"; // SymbolTileのインポート
import {SymbolTile} from "./type";

const spinReels = (
  currentReels: SymbolTile[],
  symbols: SymbolTile[],
  betCoins: number
): {newReels: SymbolTile[]; win: boolean; points: number} => {
  const newReels = currentReels.map(
    () => symbols[Math.floor(Math.random() * symbols.length)]
  );
  const win = new Set(newReels.map((tile) => tile.id)).size === 1;
  const points = win ? newReels[0].point : 0;

  return {newReels, win, points};
};

export const SlotMachine: React.FC = () => {
  const [coins, setCoins] = useState(INITIAL_COINS);
  const [reels, setReels] = useState<SymbolTile[]>(Array(3).fill(SYMBOLS[0])); // SymbolTile型の配列

  const handleSpin = () => {
    const {newReels, win, points} = spinReels(reels, SYMBOLS, BET_COINS);
    setReels(newReels);
    setCoins((prev) => prev - BET_COINS + (win ? points : 0));
  };
  // TODO リファクタリング前
  //   const handleSpin = () => {
  //     const newReels = reels.map(
  //       () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
  //     );
  //     setReels(newReels);
  //     setCoins((prev) => prev - BET_COINS);
  //     // 当たり判定
  //     if (new Set(newReels.map((tile) => tile.id)).size === 1) {
  //       setCoins((prev) => prev - BET_COINS + newReels[0].point); // 当たりならコインを追加
  //     }
  //   };

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
        disabled={coins < BET_COINS}
      >
        スピン
      </Button>
      {isWin && <Box sx={{marginTop: 2}}>勝利！</Box>}
    </Box>
  );
};
