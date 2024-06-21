import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function Disclaimer() {
  return (
    <View style={styles.disclaimer}>
      <View style={styles.iconSection}>
        <Ionicons name="warning-outline" size={16} color="white" />
      </View>
      <View style={styles.textSection}>
        <Text style={{ color: "white", fontSize: 10 }}>
          This is a demonstration app. Do Not Use for real medical decisions.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  disclaimer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9533B",
    padding: 10,
    borderRadius: 5,
    gap: 10,
  },
  iconSection: {},
  textSection: {},
});
