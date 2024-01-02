import {SymbolTile} from "./symbol";

export interface SlotMachineState {
  coins: number;
  reels: SymbolTile[];
  isJackpot: boolean;
}
