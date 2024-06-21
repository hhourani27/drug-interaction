import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export function DrugInteractionBox({ interaction }) {
  return (
    <View
      style={[
        styles.interactionBox,
        { borderColor: getColorFromSeverity(interaction.severity) },
      ]}
    >
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
        <Text style={{ fontStyle: "italic" }}>
          <Text
            style={{ color: getColorFromSeverity(interaction.severity) }}
          >{`[${interaction.severity}] `}</Text>
          <Text>{interaction.description}</Text>
        </Text>
      </View>
    </View>
  );
}

const getColorFromSeverity = (severity) => {
  switch (severity) {
    case "minor":
      return "limegreen";
    case "moderate":
      return "orange";
    case "major":
      return "red";

      return "";
  }
};

const styles = StyleSheet.create({
  interactionBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,

    padding: 10,
    gap: 10,
  },

  interactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drugName: { flex: 1, flexWrap: "wrap", fontWeight: "500" },
  interactionArrow: { color: "#A09DAE" },

  interactionDescription: {
    borderTopColor: "#F6E7E5",
    borderTopWidth: 1,
    paddingTop: 5,
  },
});
