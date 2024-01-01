import {WILD_CARD_ID, SEVEN_CARD_ID} from "./const";
import {SymbolTile} from "./type";

export const spinReels = (
  symbols: SymbolTile[],
  betCoins: number
): {newReels: SymbolTile[]; win: boolean; jackpot: boolean; points: number} => {
  const newReels = Array.from(
    {length: 3},
    () => symbols[Math.floor(Math.random() * symbols.length)]
  );

  const hasWildCard = newReels.some((tile) => tile.id === WILD_CARD_ID);
  const isJackpot = newReels.every((tile) => tile.id === SEVEN_CARD_ID);

  let win = false;
  let points = 0;

  if (isJackpot) {
    // ジャックポットの場合
    win = true;
    points = 100; // ジャックポット時のポイント
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
