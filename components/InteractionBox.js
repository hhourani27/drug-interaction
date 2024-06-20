import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export function InteractionBox({ interaction }) {
  return (
    <View style={[styles.interactionBox, styles[interaction.severity]]}>
      <View style={styles.interactionHeader}>
        <Text style={styles.drugName}>{interaction.drug1}</Text>
        <FontAwesome6
          name="arrows-left-right"
          size={20}
          style={styles.interactionArrow}
        />
        <Text style={[styles.drugName, { textAlign: "right" }]}>
          {interaction.drug2}
        </Text>
      </View>
      <View style={styles.interactionDescription}>
        <Text style={{ fontStyle: "italic" }}>{interaction.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interactionBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,

    padding: 10,
    gap: 10,
  },
  minor: { borderColor: "limegreen" },
  moderate: { borderColor: "orange" },
  major: { borderColor: "red" },

  interactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drugName: { flex: 1, flexWrap: "wrap" },
  interactionArrow: { color: "#A09DAE" },

  interactionDescription: {
    borderTopColor: "#F6E7E5",
    borderTopWidth: 1,
    paddingTop: 5,
  },
});
