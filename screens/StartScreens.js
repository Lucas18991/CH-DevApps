import { React, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Cards from "../CH-DevApps-LLM/componentes/card";
import Input from "../CH-DevApps-LLM/componentes/input";
import colors from "../constants/colors";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const StartScreens = (onStartGame) => {
  const [value, setValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g), "");
  };

  const handleConfirmation = () => {
    const choseNumber = parseInt(value);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(choseNumber);
  };

  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.Screen}>
            <Cards>
              <Text> Elije</Text>
              <Input value={value} onChangeText={handleInput} />
              <View style={styles.ButtonContainer}>
                <Pressable
                  style={styles.CleanButton}
                  onPress={handleResetInput}
                >
                  <Text style={{ color: white }}>limpiar</Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.CleanButton,
                    backgroundColor: colors.primary,
                    width: 80,
                  }}
                  onPress={handleConfirmation}
                >
                  <Text style={{ color: white }}>Confirmar</Text>
                </Pressable>
              </View>
            </Cards>
            {confirmed && (
              <Cards newStyles={{ marginTop: 50, wifth: 150 }}>
                <Text>tu numero</Text>
                <Text>{selectedNumber}</Text>
                <Button
                  title="Empezar Juego"
                  onPress={() => onStartGame(selectedNumber)}
                ></Button>
              </Cards>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StartScreens;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginTop: "50",
  },

  CleanButton: {
    backgroundColor: colors.secondary,
    width: "30%",
    height: "70",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10",
  },
  ConfirmButton: {
    backgroundColor: colors.primary,
    width: "30%",
    height: "70",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10",
  },
  ButtonContainer: {
    borderBottomColor: "lightblue",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  InputContainer: {
    borderBottomColor: "black",
    width: "300",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
