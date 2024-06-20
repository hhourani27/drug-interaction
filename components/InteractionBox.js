import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function InteractionBox({ interaction }) {
  return (
    <View style={styles.interactionBox}>
      <View style={styles.interactionHeader}>
        <View style={styles.drugs}>
          <Text>{interaction.drug1}</Text>
          <Text>{interaction.drug2}</Text>
        </View>
        <View style={styles.severity}>
          <Text>{interaction.severity}</Text>
        </View>
      </View>
      <View style={styles.interactionDescription}>
        <Text>{interaction.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interactionBox: { backgroundColor: "#F6F6F6", padding: 10, borderRadius: 10 },
  interactionHeader: { flexDirection: "row" },
  drugs: {},
  severity: {},

  interactionDescription: {},
});
