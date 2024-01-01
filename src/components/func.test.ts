import {spinReels} from "./func";
import {SymbolTile} from "./type";

describe("spinReels function", () => {
  // テスト用のシンボルデータ
  const testSymbols: SymbolTile[] = [
    {id: "cherry", label: "🍒", point: 10},
    {id: "lemon", label: "🍋", point: 5},
  ];

  test("should return win true and points when all reels match", () => {
    // モック関数を使用して常に同じシンボルを返すようにする
    jest.spyOn(global.Math, "random").mockReturnValue(0);

    const {newReels, win, points} = spinReels(testSymbols, testSymbols, 3);

    expect(win).toBe(true);
    expect(points).toBe(testSymbols[0].point);
    expect(newReels.every((tile) => tile.id === testSymbols[0].id)).toBe(true);

    // モックをリセット
    jest.spyOn(global.Math, "random").mockRestore();
  });

  test("should return win false and points zero when not all reels match", () => {
    // ランダムな結果を得るためにモックを使用しない
    const {win, points} = spinReels(testSymbols, testSymbols, 3);

    expect(win).toBe(false);
    expect(points).toBe(0);
  });
});
