import {WILD_CARD_ID, SEVEN_CARD_ID} from "../constants/symbols";
import {SymbolTile} from "../types/symbol";

export const spinReels = (
  symbols: SymbolTile[],
  betCoins: number
): {newReels: SymbolTile[]; win: boolean; jackpot: boolean; points: number} => {
  const newReels = Array.from(
    {length: 3},
    () => symbols[Math.floor(Math.random() * symbols.length)]
  );

  const hasWildCard = newReels.some((tile) => tile.id === WILD_CARD_ID);
  const isJackpot =
    newReels.every(
      (tile) => tile.id === SEVEN_CARD_ID || tile.id === WILD_CARD_ID
    ) && newReels.some((tile) => tile.id === SEVEN_CARD_ID);

  let win = false;
  let points = 0;

  if (isJackpot) {
    win = true;
    points = 30; // ジャックポット時のポイント
  } else if (
    new Set(
      newReels.map((tile) =>
        hasWildCard && tile.id !== WILD_CARD_ID ? "wild" : tile.id
      )
    ).size === 1
  ) {
    // ワイルドカードを含む勝利
    win = true;
    points = newReels[0].point;
  }

  return {newReels, win, jackpot: isJackpot, points};
};
