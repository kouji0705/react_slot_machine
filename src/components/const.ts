import {SymbolTile} from "./type";

export const INITIAL_COINS = 100;
export const BET_COINS = 3;

export const CHERRY_ID = "cherry";
export const LEMON_ID = "lemon";
export const ORANGE_ID = "orange";
export const GRAPE_ID = "grape";
export const WATERMELON_ID = "watermelon";
export const WILD_CARD_ID = "wild_card";
export const SEVEN_CARD_ID = "seven";

export const CHERRY_SYMBOL = "🍒";
export const LEMON_SYMBOL = "🍋";
export const ORANGE_SYMBOL = "🍊";
export const GRAPE_SYMBOL = "🍇";
export const WATERMELON_SYMBOL = "🍉";
export const WILD_CARD_SYMBOL = "⚙️";
export const SEVEN_SYMBOL = "💰";

export const SYMBOLS: SymbolTile[] = [
  {
    id: CHERRY_ID,
    label: CHERRY_SYMBOL,
    point: 10,
  },
  {
    id: LEMON_ID,
    label: LEMON_SYMBOL,
    point: 10,
  },
  //   {
  //     id: ORANGE_ID,
  //     label: ORANGE_SYMBOL,
  //     point: 10,
  //   },
  //   {
  //     id: GRAPE_ID,
  //     label: GRAPE_SYMBOL,
  //     point: 20,
  //   },
  //   {
  //     id: WATERMELON_ID,
  //     label: WATERMELON_SYMBOL,
  //     point: 30,
  //   },
  {
    id: SEVEN_CARD_ID,
    label: SEVEN_SYMBOL,
    point: 30,
  },
  {
    id: WILD_CARD_ID,
    label: WILD_CARD_SYMBOL,
    point: 30,
  },
];
