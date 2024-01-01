import {SymbolTile} from "./type";

export const spinReels = (
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
