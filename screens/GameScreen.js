import { React, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Cards from "../CH-DevApps-LLM/componentes/card";

const GameScreen = (handleResult) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 99));

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);
  return (
    <View styles={styles.container}>
      <Text>La suposicion del oponente</Text>
      <Text>{currentGuess}</Text>
      <Cards newStyles={styles.buttonConteiner}>
        <Button
          title="Menor"
          onPress={() => handleResult("lower", currentGuess)}
        />

        <Button
          title="mayor"
          onPress={() => handleResult("greater", currentGuess)}
        />
      </Cards>
      greater
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonConteiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 300,
  },
});
