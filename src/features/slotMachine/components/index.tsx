import React, {useReducer} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Reel} from "./Reel";
import {JackpotDialog} from "./Dialog";
import {SYMBOLS} from "../constants/symbols";
import {SlotMachineState} from "../types/state";
import {slotMachineReducer} from "../utils/reducer";
import {INITIAL_COINS, BET_COINS} from "../constants/slot";
import {CLOSE_JACKPOT_ACTION, SPIN_ACTION} from "../constants/actions";
import styled from "@emotion/styled";

const initialState: SlotMachineState = {
  coins: INITIAL_COINS,
  reels: Array(3).fill(SYMBOLS[0]),
  isJackpot: false,
  isWin: false,
};

export const SlotMachine: React.FC = () => {
  const [state, dispatch] = useReducer(slotMachineReducer, initialState);

  const handleSpin = () => {
    dispatch({type: SPIN_ACTION});
  };

  const handleCloseJackpot = () => {
    dispatch({type: CLOSE_JACKPOT_ACTION});
  };

  return (
    <RootContainer>
      <Box>Coinの枚数：{state.coins}枚</Box>
      <Reels>
        {state.reels.map((tile, index) => (
          <Reel key={index} symbol={tile.label} />
        ))}
      </Reels>
      <SpinButton
        variant="contained"
        color="primary"
        onClick={handleSpin}
        disabled={state.coins < BET_COINS}
      >
        スピン
      </SpinButton>
      {state.isJackpot && <JackpotDialog onClose={handleCloseJackpot} />}
      {state.isWin && <DisplayWin>勝利！</DisplayWin>}
    </RootContainer>
  );
};

const RootContainer = styled(Box)(() => ({
  textAlign: "center",
  marginTop: "4px",
}));

const Reels = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: 2,
}));

const SpinButton = styled(Button)(() => ({
  marginTop: "16px",
}));

const DisplayWin = styled(Box)(() => ({
  marginTop: "2px",
}));
