import {SymbolTile} from "./symbol";

export type SlotMachineState = {
  coins: number;
  reels: SymbolTile[];
  isJackpot: boolean;
};
