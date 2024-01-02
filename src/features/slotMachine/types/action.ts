import {SymbolTile} from "./symbol";

export type SlotMachineAction =
  | {
      type: "SPIN";
      results: {
        newReels: SymbolTile[];
        win: boolean;
        jackpot: boolean;
        points: number;
      };
    }
  | {type: "CLOSE_JACKPOT"};
