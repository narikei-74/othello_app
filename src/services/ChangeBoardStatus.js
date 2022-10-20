// 初期の盤面作成
export default function ChangeBoardStatus(
  turn,
  retsuId,
  masuId,
  currentStatus
) {
  currentStatus[retsuId][masuId] = turn;

  return currentStatus;
}
