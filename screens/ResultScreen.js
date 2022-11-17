import { React, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Cards from "../CH-DevApps-LLM/componentes/card";

const ResultScreen = ({result}) => {
  return (
    <View styles={styles.container}>
      <Cards>
        <Text>You Lose {result}</Text>
      </Cards>
      <Image style={styles.imagecointainer}
        source={{uri "htttps://img.freepik.com/vector-gratis/juego-terminado-efec.com"}}
      />
    </View>
  );
};

export default ResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  imagecointainer:{
    height: 300,
    width: 300,
  }
});
