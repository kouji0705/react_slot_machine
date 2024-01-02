import {SPIN_ACTION, CLOSE_JACKPOT_ACTION} from "../constants/actions";

export type SlotMachineAction = SpinAction | CloseJackpotAction;

export type SpinAction = {
  type: typeof SPIN_ACTION;
};

export type CloseJackpotAction = {
  type: typeof CLOSE_JACKPOT_ACTION;
};
