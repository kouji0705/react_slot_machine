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

describe("コインの消費", () => {
  test("スピンボタンをクリックするとコインが3枚消費される", () => {
    render(<SlotMachine />);
    fireEvent.click(screen.getByRole("button", { name: "スピン" }));
    expect(screen.getByText("Coinの枚数：97枚")).toBeInTheDocument();
  });
  test("コインが3枚以上あるときはスピンボタンをクリックできる", () => {
    render(<SlotMachine />);
    expect(screen.getByRole("button", { name: "スピン" })).toBeEnabled();
  });
  test("コインが0枚になるとスピンボタンは無効になる", () => {
    render(<SlotMachine />);
    const spinButton = screen.getByRole("button", {
      name: "スピン",
    }) as HTMLButtonElement;

    // コインを0枚にするまでボタンをクリックする
    while (!spinButton.disabled) {
      fireEvent.click(spinButton);
    }

    // ボタンが無効化されていることを検証
    expect(spinButton).toBeDisabled();
  });
});
