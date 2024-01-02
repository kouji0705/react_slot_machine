import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

type ReelProps = {
  symbol: string;
};

export const Reel: React.FC<ReelProps> = ({symbol}) => {
  return <RootContainer>{symbol}</RootContainer>;
};

const RootContainer = styled(Box)(() => ({
  fontSize: "2rem",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
}));
