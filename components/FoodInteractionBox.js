import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function FoodInteractionBox({ foodInteraction }) {
  console.log(foodInteraction);
  return (
    <View style={styles.interactionBox}>
      <View style={styles.drugColumn}>
        <Text style={styles.drugName}>{foodInteraction.drug}</Text>
      </View>
      <View style={styles.descriptionsColumn}>
        {foodInteraction.interactions.map((inter, idx) => (
          <View key={`interaction-${idx}`}>
            <Text style={{ fontStyle: "italic", textAlign: "justify" }}>
              {inter}
            </Text>
          </View>
        ))}
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

  drugColumn: {},
  drugName: { flex: 1, flexWrap: "wrap", fontWeight: "500" },

  descriptionsColumn: {
    gap: 10,

    borderTopColor: "#F6E7E5",
    borderTopWidth: 1,
    paddingTop: 5,
  },
});
