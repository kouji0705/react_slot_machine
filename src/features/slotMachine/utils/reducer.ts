import {CLOSE_JACKPOT_ACTION, SPIN_ACTION} from "../constants/actions";
import {BET_COINS} from "../constants/slot";
import {SlotMachineAction} from "../types/action";
import {SlotMachineState} from "../types/state";

export const slotMachineReducer = (
  state: SlotMachineState,
  action: SlotMachineAction
): SlotMachineState => {
  switch (action.type) {
    case SPIN_ACTION:
      console.log("=======HIT8 ", action.results, "=======");
      const {newReels, win, jackpot, points} = action.results;
      return {
        ...state,
        reels: newReels,
        isJackpot: jackpot,
        coins: state.coins - BET_COINS + (win ? points : 0),
      };
    case CLOSE_JACKPOT_ACTION:
      return {...state, isJackpot: false};
    default:
      return state;
  }
};
