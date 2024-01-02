import {BET_COINS} from "../constants/symbols";
import {SlotMachineAction} from "../types/action";
import {SlotMachineState} from "../types/state";

export const slotMachineReducer = (
  state: SlotMachineState,
  action: SlotMachineAction
): SlotMachineState => {
  switch (action.type) {
    case "SPIN":
      const {newReels, win, jackpot, points} = action.results;
      return {
        ...state,
        reels: newReels,
        isJackpot: jackpot,
        coins: state.coins - BET_COINS + (win ? points : 0),
      };
    case "CLOSE_JACKPOT":
      return {...state, isJackpot: false};
    default:
      return state;
  }
};
