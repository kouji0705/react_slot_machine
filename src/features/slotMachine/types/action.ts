import {SPIN_ACTION, CLOSE_JACKPOT_ACTION} from "../constants/actions";
import {SymbolTile} from "./symbol";

export type SlotMachineAction = SpinAction | CloseJackpotAction;

export type SpinAction = {
  type: typeof SPIN_ACTION;
  results: {
    newReels: SymbolTile[];
    win: boolean;
    jackpot: boolean;
    points: number;
  };
};

export type CloseJackpotAction = {
  type: typeof CLOSE_JACKPOT_ACTION;
};
