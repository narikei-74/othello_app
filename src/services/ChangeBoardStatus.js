// 初期の盤面作成
export default function ChangeBoardStatus(
  turn,
  retsuId,
  masuId,
  currentStatus
) {
  const none = 0;
  const black = 1;
  const white = 2;
  let is_set = false;

  // 上側
  if (
    retsuId != 1 &&
    currentStatus[retsuId - 1][masuId] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = retsuId - 1; i >= 1; i--) {
      if (currentStatus[i][masuId] == white) {
        for (let k = retsuId - 1; k >= i; k--) {
          currentStatus[k][masuId] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    retsuId != 1 &&
    currentStatus[retsuId - 1][masuId] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = retsuId - 1; i >= 1; i--) {
      if (currentStatus[i][masuId] == black) {
        for (let k = retsuId - 1; k >= i; k--) {
          currentStatus[k][masuId] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 下側
  if (
    retsuId != 8 &&
    currentStatus[retsuId + 1][masuId] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = retsuId + 1; i <= 8; i++) {
      if (currentStatus[i][masuId] == white) {
        for (let k = retsuId + 1; k <= i; k++) {
          currentStatus[k][masuId] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    retsuId != 8 &&
    currentStatus[retsuId + 1][masuId] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = retsuId + 1; i <= 8; i++) {
      if (currentStatus[i][masuId] == black) {
        for (let k = retsuId + 1; k <= i; k++) {
          currentStatus[k][masuId] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 左側
  if (
    masuId != 1 &&
    currentStatus[retsuId][masuId - 1] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = masuId - 1; i >= 1; i--) {
      if (currentStatus[retsuId][i] == white) {
        for (let k = masuId - 1; k >= i; k--) {
          currentStatus[retsuId][k] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    masuId != 1 &&
    currentStatus[retsuId][masuId - 1] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = masuId - 1; i >= 1; i--) {
      if (currentStatus[retsuId][i] == black) {
        for (let k = masuId - 1; k >= i; k--) {
          currentStatus[retsuId][k] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 右側
  if (
    masuId != 8 &&
    currentStatus[retsuId][masuId + 1] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = masuId + 1; i <= 8; i++) {
      if (currentStatus[retsuId][i] == white) {
        for (let k = masuId + 1; k <= i; k++) {
          currentStatus[retsuId][k] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    masuId != 8 &&
    currentStatus[retsuId][masuId + 1] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = masuId + 1; i <= 8; i++) {
      if (currentStatus[retsuId][i] == black) {
        for (let k = masuId + 1; k <= i; k++) {
          currentStatus[retsuId][k] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 左上側
  if (
    retsuId != 1 &&
    masuId != 1 &&
    currentStatus[retsuId - 1][masuId - 1] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = 1; i < masuId; i++) {
      if (retsuId > i && currentStatus[retsuId - i][masuId - i] == white) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId - k][masuId - k] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    retsuId != 1 &&
    masuId != 1 &&
    currentStatus[retsuId - 1][masuId - 1] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = 1; i < masuId; i++) {
      if (retsuId > i && currentStatus[retsuId - i][masuId - i] == black) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId - k][masuId - k] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 右上側
  if (
    retsuId != 1 &&
    masuId != 8 &&
    currentStatus[retsuId - 1][masuId + 1] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = 1; i < 8 - masuId; i++) {
      if (retsuId > i && currentStatus[retsuId - i][masuId + i] == white) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId - k][masuId + k] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    retsuId != 1 &&
    masuId != 8 &&
    currentStatus[retsuId - 1][masuId + 1] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = 1; i < 8 - masuId; i++) {
      if (retsuId > i && currentStatus[retsuId - i][masuId + i] == black) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId - k][masuId + k] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 左下側
  if (
    retsuId != 8 &&
    masuId != 1 &&
    currentStatus[retsuId + 1][masuId - 1] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = 1; i < masuId; i++) {
      if (8 - retsuId > i && currentStatus[retsuId + i][masuId - i] == white) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId + k][masuId - k] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    retsuId != 8 &&
    masuId != 1 &&
    currentStatus[retsuId + 1][masuId - 1] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = 1; i < masuId; i++) {
      if (8 - retsuId > i && currentStatus[retsuId + i][masuId - i] == black) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId + k][masuId - k] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  // 右下側
  if (
    retsuId != 8 &&
    masuId != 8 &&
    currentStatus[retsuId + 1][masuId + 1] == black &&
    turn == white
  ) {
    // 白の時
    for (let i = 1; i < 8 - masuId; i++) {
      if (8 - retsuId > i && currentStatus[retsuId + i][masuId + i] == white) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId + k][masuId + k] = white;
        }
        is_set = true;
        break;
      }
    }
  } else if (
    retsuId != 8 &&
    masuId != 8 &&
    currentStatus[retsuId + 1][masuId + 1] == white &&
    turn == black
  ) {
    // 黒の時
    for (let i = 1; i < 8 - masuId; i++) {
      if (8 - retsuId > i && currentStatus[retsuId + i][masuId + i] == black) {
        for (let k = 1; k <= i; k++) {
          currentStatus[retsuId + k][masuId + k] = black;
        }
        is_set = true;
        break;
      }
    }
  }

  if (is_set) {
    currentStatus[retsuId][masuId] = turn;
    if (turn == black) {
      turn = white;
    } else {
      turn = black;
    }
  }

  return {
    currentStatus: currentStatus,
    turn: turn,
  };
}
