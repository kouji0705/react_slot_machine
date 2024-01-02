import {
  CHERRY_ID,
  CHERRY_SYMBOL,
  GRAPE_ID,
  GRAPE_SYMBOL,
  LEMON_ID,
  LEMON_SYMBOL,
  ORANGE_ID,
  ORANGE_SYMBOL,
  SEVEN_CARD_ID,
  SEVEN_SYMBOL,
  WATERMELON_ID,
  WATERMELON_SYMBOL,
  WILD_CARD_ID,
  WILD_CARD_SYMBOL,
} from "./const";

export type SymbolTile = {
  id: SymbolId;
  label: SymbolLabel;
  point: number;
  isWildCard?: boolean;
  isJackpot?: boolean;
};

export type SymbolId =
  | typeof CHERRY_ID
  | typeof LEMON_ID
  | typeof ORANGE_ID
  | typeof GRAPE_ID
  | typeof WATERMELON_ID
  | typeof WILD_CARD_ID
  | typeof SEVEN_CARD_ID;

export type SymbolLabel =
  | typeof CHERRY_SYMBOL
  | typeof LEMON_SYMBOL
  | typeof ORANGE_SYMBOL
  | typeof GRAPE_SYMBOL
  | typeof WATERMELON_SYMBOL
  | typeof WILD_CARD_SYMBOL
  | typeof SEVEN_SYMBOL;
