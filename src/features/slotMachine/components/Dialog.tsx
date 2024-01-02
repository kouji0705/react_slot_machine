import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import {Typography} from "@mui/material";

export interface JackpotDialogProps {
  onClose: () => void;
}

// export const JackpotDialog: React.FC = () => {
export const JackpotDialog = () => {
  const [open, setOpen] = useState(true); // ダイアログの開閉状態

  // ダイアログを閉じる関数
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md" // または 'lg', 'xl' など、必要に応じてサイズを調整
    >
      <img
        src="/shiba_motivate.gif"
        alt="Motivated Shiba Inu"
        style={{width: "200px"}}
      />
      <Typography>JackPot始まるよ！！！</Typography>
    </Dialog>
  );
};
