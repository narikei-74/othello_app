import { StyleSheet, View, Pressable } from "react-native";
import { useState, useEffect } from "react";
import MakeFirstBoardStatus from "../services/MakeFirstBoardStatus";
import ChangeBoardStatus from "../services/ChangeBoardStatus";

const OthelloBoard = () => {
  const masuLength = 8;
  const lineLength = 8;
  const none = 0;
  const black = 1;
  const white = 2;

  const [othelloStatus, setOthelloStatus] = useState(MakeFirstBoardStatus());
  const [turn, setTurn] = useState(black);

  // 列のview作成関数
  const retsuView = (line, lineIndex) => {
    return line.map((masu, index) => {
      var style = index % masuLength == 0 ? styles.masuLast : styles.masu;

      switch (masu) {
        case none:
          return (
            <Pressable
              style={style}
              onPress={() => {
                setOthelloStatus(
                  ChangeBoardStatus(turn, lineIndex, index, othelloStatus)
                );
                if (turn == black) {
                  setTurn(white);
                } else {
                  setTurn(black);
                }
              }}
            >
              <View></View>
            </Pressable>
          );
        case black:
          return (
            <View
              key={lineIndex + "_" + index}
              id={lineIndex + "_" + index}
              style={style}
            >
              <View style={styles.blackCircle}></View>
            </View>
          );
        case white:
          return (
            <View
              key={lineIndex + "_" + index}
              id={lineIndex + "_" + index}
              style={style}
            >
              <View style={styles.whiteCircle}></View>
            </View>
          );
      }
    });
  };

  // オセロ盤面のviewを作成
  const othelloView = othelloStatus.map((line, index) => {
    return (
      <View
        key={index}
        style={index % lineLength == 0 ? styles.retsuLast : styles.retsu}
      >
        {retsuView(line, index)}
      </View>
    );
  });

  return <View style={styles.othello}>{othelloView}</View>;
};

export default OthelloBoard;

const styles = StyleSheet.create({
  othello: {
    width: 400,
    height: 400,
    borderWidth: 3,
    backgroundColor: "green",
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
  },

  retsu: {
    height: "12.5%",
    borderBottomWidth: 1,
    flexDirection: "row",
  },

  retsuLast: {
    height: "12.5%",
    flexDirection: "row",
  },

  masu: {
    height: "100%",
    width: "12.5%",
    borderRightWidth: 1,
    alignItems: "center",
  },

  masuLast: {
    height: "100%",
    width: "12.5%",
    alignItems: "center",
  },

  blackCircle: {
    borderRadius: "50%",
    width: "75%",
    height: "75%",
    marginTop: "12.5%",
    backgroundColor: "#000",
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
  },

  whiteCircle: {
    borderRadius: "50%",
    width: "75%",
    height: "75%",
    marginTop: "12.5%",
    backgroundColor: "#fff",
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
  },
});
