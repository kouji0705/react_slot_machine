import {CLOSE_JACKPOT_ACTION, SPIN_ACTION} from "../constants/actions";
import {BET_COINS} from "../constants/slot";
import {SYMBOLS} from "../constants/symbols";
import {SlotMachineAction} from "../types/action";
import {SlotMachineState} from "../types/state";
import {spinReels} from "./spinReels";

export const slotMachineReducer = (
  state: SlotMachineState,
  action: SlotMachineAction
): SlotMachineState => {
  switch (action.type) {
    case SPIN_ACTION:
      const results = spinReels(SYMBOLS, BET_COINS);
      const {newReels, win, jackpot, points} = results;
      return {
        ...state,
        reels: newReels,
        isJackpot: jackpot,
        coins: state.coins - BET_COINS + (win ? points : 0),
        isWin: win,
      };
    case CLOSE_JACKPOT_ACTION:
      return {...state, isJackpot: false};
    default:
      return state;
  }
};
