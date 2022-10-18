import { StyleSheet, Text, View } from "react-native";

const Player2 = () => {
  return (
    <View style={styles.player2}>
      <Text style={styles.playerName}>hogehoge</Text>
      <Text>白（後攻）</Text>
    </View>
  );
};

export default Player2;

const styles = StyleSheet.create({
  player2: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 30,
    alignItems: "flex-end",
  },

  playerName: {
    fontSize: 30,
    letterSpacing: 1.5,
    marginTop: 5,
    marginBottom: 5,
  },
});
