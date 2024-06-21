import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function AboutPage() {
  return (
    <View style={styles.container}>
      <Text>
        This App is written by Habib El Hourani as challenge and a showcase
      </Text>
      <Text>This App queries DrugBank Online's API to retrieve data.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    gap: 20,

    padding: 20,
  },
});
