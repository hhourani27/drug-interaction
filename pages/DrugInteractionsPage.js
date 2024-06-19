import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { DrugInputAutocomplete } from "../components/DrugInputAutocomplete";

export function DrugInteractionsPage() {
  const [selectedOption, setSelectedOption] = useState("Empty");

  return (
    <View style={styles.container}>
      <DrugInputAutocomplete
        onValueSelect={(value) => setSelectedOption(value)}
      />
      <Text>{selectedOption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",

    padding: 20,
  },
});
