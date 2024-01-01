import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SlotMachine } from "./SlotMachine";

describe("SlotMachine コンポーネント", () => {
  test("初期レンダリングでスピンボタンが表示される", () => {
    render(<SlotMachine />);
    expect(screen.getByRole("button", { name: "スピン" })).toBeInTheDocument();
  });

  test("スピンボタンをクリックするとリールが回転する", () => {
    render(<SlotMachine />);
    const initialReels = screen
      .getAllByText("🍒")
      .map((reel) => reel.textContent);
    fireEvent.click(screen.getByRole("button", { name: "スピン" }));
    const updatedReels = screen
      .getAllByText(/🍒|🍋|🍊|🍇|🍉/)
      .map((reel) => reel.textContent);
    expect(updatedReels).not.toEqual(initialReels);
  });
});
