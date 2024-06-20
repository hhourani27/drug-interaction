import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

export function DrugChip({ drugName, onDelete }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.drugChip,
        pressed ? styles.chipPressed : null,
      ]}
      onPress={() => onDelete(drugName)}
    >
      <Text>{drugName}</Text>
      <Entypo name="circle-with-cross" size={16} style={styles.deleteIcon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  drugChip: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  chipPressed: {
    backgroundColor: "#F6E7E5",
  },
  deleteIcon: {
    color: "#A09DAE",
  },
});
