import React, {useState} from "react";
import {Reel} from "./Reel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {BET_COINS, INITIAL_COINS, SYMBOLS} from "./const"; // 定数のインポート
import {SymbolTile} from "./type";
import {spinReels} from "./func";
// import jackpotGif from "../assets/images/jackpot.gif"; // GIF画像のインポート
// import shiba_motivate from "../assets/shiba_motivate.gif"; // GIF画像のインポート
// import shiba_motivate from "shiba_motivate.gif"; // GIF画像のインポート

export const SlotMachine: React.FC = () => {
  const [coins, setCoins] = useState(INITIAL_COINS);
  const [reels, setReels] = useState<SymbolTile[]>(Array(3).fill(SYMBOLS[0])); // SymbolTile型の配列
  const [isJackpot, setIsJackpot] = useState(false); // ジャックポット状態の追加

  const handleSpin = () => {
    const {newReels, win, jackpot, points} = spinReels(SYMBOLS, BET_COINS);
    setReels(newReels);
    setIsJackpot(jackpot);
    setCoins((prev) => prev - BET_COINS + (win ? points : 0));
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
        disabled={coins < BET_COINS}
      >
        スピン
      </Button>
      {isWin && <Box sx={{marginTop: 2}}>勝利！</Box>}
      {isJackpot && <Box sx={{marginTop: 2}}>ジャックポット！</Box>}
      <img src="/shiba_motivate.gif" alt="Motivated Shiba Inu" width="200" />
    </Box>
  );
};
