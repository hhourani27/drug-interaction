// components/HeaderInfoButton.js
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderInfoButton() {
  const navigation = useNavigation(); // Get navigation object

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(
          // @ts-ignore
          "About"
        )
      }
    >
      {({ pressed }) => (
        <Ionicons
          name="information-circle-outline"
          size={28}
          style={pressed ? styles.infoIconPressed : styles.infoIcon}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  infoIcon: {
    color: "white",
  },
  infoIconPressed: {
    color: "#F6E7E5",
  },
});
