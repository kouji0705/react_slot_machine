// SlotMachine.tsx
import React, { useState } from "react";
import { Reel } from "./Reel";

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
    <div>
      <div className="reels">
        {reels.map((symbol, index) => (
          <Reel key={index} symbol={symbol} />
        ))}
      </div>
      <button onClick={spinReels}>スピン</button>
      {isWin && <div>勝利！</div>}
    </div>
  );
};
