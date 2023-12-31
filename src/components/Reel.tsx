// Reel.tsx
import React from "react";

type ReelProps = {
  symbol: string;
};

export const Reel: React.FC<ReelProps> = ({ symbol }) => {
  return <div className="reel">{symbol}</div>;
};
