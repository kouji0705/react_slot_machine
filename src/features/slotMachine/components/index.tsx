import React, {useReducer} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Reel} from "./Reel";
import {JackpotDialog} from "./Dialog";
import {spinReels} from "../utils/spinReels";
import {SYMBOLS} from "../constants/symbols";
import {SlotMachineState} from "../types/state";
import {slotMachineReducer} from "../utils/reducer";
import {INITIAL_COINS, BET_COINS} from "../constants/slot";
import {CLOSE_JACKPOT_ACTION, SPIN_ACTION} from "../constants/actions";

const initialState: SlotMachineState = {
  coins: INITIAL_COINS,
  reels: Array(3).fill(SYMBOLS[0]),
  isJackpot: false,
};

export const SlotMachine: React.FC = () => {
  const [state, dispatch] = useReducer(slotMachineReducer, initialState);

  const handleSpin = () => {
    const results = spinReels(SYMBOLS, BET_COINS);
    console.log("============== results", results);
    dispatch({type: SPIN_ACTION, results});
  };

  const handleCloseJackpot = () => {
    dispatch({type: CLOSE_JACKPOT_ACTION});
  };

  return (
    <Box sx={{textAlign: "center", marginTop: 4}}>
      <Box>Coinの枚数：{state.coins}枚</Box>
      <Box sx={{display: "flex", justifyContent: "center", gap: 2}}>
        {state.reels.map((tile, index) => (
          <Reel key={index} symbol={tile.label} />
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSpin}
        disabled={state.coins < BET_COINS}
        style={{marginTop: "16px"}}
      >
        スピン
      </Button>
      {state.isJackpot && <JackpotDialog onClose={handleCloseJackpot} />}
      {new Set(state.reels.map((tile) => tile.id)).size === 1 && (
        <Box sx={{marginTop: 2}}>勝利！</Box>
      )}
    </Box>
  );
};

export default SlotMachine;