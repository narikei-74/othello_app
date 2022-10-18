import { StyleSheet, ImageBackground } from "react-native";
import OthelloBoard from "./src/components/OthelloBoard";
import Player1 from "./src/components/Player1";
import Player2 from "./src/components/Player2";

const image = require("./assets/background.jpeg");

export default function App() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <Player1 />

      <OthelloBoard />

      <Player2 />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
});
