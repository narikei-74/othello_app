import { StyleSheet, Text, View } from "react-native";

const Player1 = () => {
  return (
    <View style={styles.player1}>
      <Text>黒（先攻）</Text>
      <Text style={styles.playerName}>narinari</Text>
    </View>
  );
};

export default Player1;

const styles = StyleSheet.create({
  player1: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 30,
  },

  playerName: {
    fontSize: 30,
    letterSpacing: 1.5,
    marginTop: 5,
    marginBottom: 5,
  },
});
