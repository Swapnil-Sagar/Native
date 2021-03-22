import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Ocean");
  const [age, setAge] = useState("23");

  const pressHandler = () => {
    setName("Swapnil");
  };

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g - Swapnil"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g - Swapnil"
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        My Name is {name}, age {age}
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    margin: 8,
    padding: 8,
    width: 150,
  },
});
