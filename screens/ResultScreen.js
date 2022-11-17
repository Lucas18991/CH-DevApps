import { React, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Cards from "../CH-DevApps-LLM/componentes/card";

const ResultScreen = ({ result }) => {
  const [image, setimage] = useState("");
  const win =
    "https://th.bing.com/th/id/OIP.HD9ytVkWQ7K1rGV237OSswHaHa?pid=ImgDet&rs=1";
  const lose =
    "https://image.freepik.com/vector-gratis/fondo-game-over-distorision_23-2148087924.jpg";

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === win) {
      setimage(win);
    } else {
      setimage(lose);
    }
  };
  return (
    <View styles={styles.container}>
      <Cards>
        <Text>{`You {result}`}</Text>
      </Cards>
      <Image
        style={styles.imagecointainer}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default ResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imagecointainer: {
    height: 300,
    width: 300,
    marginTop: 50,
  },
});
