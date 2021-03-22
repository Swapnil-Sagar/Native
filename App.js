import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Ocean");

  const pressHandler = () => {
    setName("Swapnil");
  };

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
