import React, {useState} from "react";
import {Reel} from "./Reel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {BET_COINS, INITIAL_COINS, SYMBOLS} from "../constants/symbols"; // 定数のインポート
import {SymbolTile} from "../types/symbol";
import {spinReels} from "../utils/spinReels";
import {JackpotDialog} from "./Dialog";

// ├── components
// │   ├── slotMachine <<< イベントドメインモデルに関連する機能
// │   │   ├── components <<< 個別ドメインモデルに関連するコンポーネント定義
// │   │   ├── constants <<< 個別ドメインモデルに関連する定数定義
// │   │   ├── hooks <<< レポジトリで実装したファンクションを使用するフック定義
// │   │   └── stores <<< 個別ドメインモデルに関連するストア定義
// │   │   └── types <<< 個別ドメインモデルから派生するデータ型定義
// │   │   └── utils <<< 個別ドメインモデルで使用するユーティリティ関数定義

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
      {isJackpot && <JackpotDialog />}
      {isWin && <Box sx={{marginTop: 2}}>勝利！</Box>}
      {isJackpot && <Box sx={{marginTop: 2}}>ジャックポット！</Box>}
    </Box>
  );
};
