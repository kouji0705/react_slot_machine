import {
  CHERRY_ID,
  CHERRY_SYMBOL,
  GRAPE_ID,
  GRAPE_SYMBOL,
  LEMON_ID,
  LEMON_SYMBOL,
  ORANGE_ID,
  ORANGE_SYMBOL,
  WATERMELON_ID,
  WATERMELON_SYMBOL,
} from "./const";

export type SymbolTile = {
  id: SymbolId;
  label: SymbolLabel;
  point: number;
};

export type SymbolId =
  | typeof CHERRY_ID
  | typeof LEMON_ID
  | typeof ORANGE_ID
  | typeof GRAPE_ID
  | typeof WATERMELON_ID;

export type SymbolLabel =
  | typeof CHERRY_SYMBOL
  | typeof LEMON_SYMBOL
  | typeof ORANGE_SYMBOL
  | typeof GRAPE_SYMBOL
  | typeof WATERMELON_SYMBOL;
