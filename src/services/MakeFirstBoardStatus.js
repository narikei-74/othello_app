// 初期の盤面作成
export default function MakeFirstBoardStatus() {
  const masuLength = 8;
  const lineLength = 8;
  const none = 0;
  const black = 1;
  const white = 2;

  let lines = [];
  for (let lineNum = 1; lineNum <= lineLength; lineNum++) {
    let line = [];
    for (let masNum = 1; masNum <= masuLength; masNum++) {
      line[masNum] = none;
    }
    lines[lineNum] = line;
  }

  // 白を作成
  lines[4][4] = white;
  lines[5][5] = white;

  // 黒を作成
  lines[4][5] = black;
  lines[5][4] = black;

  return lines;
}
