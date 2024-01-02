import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import {Typography} from "@mui/material";

export interface JackpotDialogProps {
  onClose: () => void;
}

export const JackpotDialog = ({onClose}: JackpotDialogProps) => {
  const [open, setOpen] = useState(true); // ダイアログの開閉状態

  // ダイアログを閉じる関数
  const handleClose = () => {
    setOpen(false);
    onClose(); // 親コンポーネントに通知
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <img
        src="/shiba_motivate.gif"
        alt="Motivated Shiba Inu"
        style={{width: "200px"}}
      />
      <Typography>JackPot始まるよ！！！</Typography>
    </Dialog>
  );
};
