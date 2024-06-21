import React from "react";
import { View, StyleSheet, Text, Pressable, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey there! 👋</Text>
      <Text style={styles.text}>
        I'm Habib El Hourani, and I created this app as a showcase of my app
        development skills 👨‍💻
      </Text>
      <Text style={styles.text}>
        This app is built using React-Native, and uses DrugBank Online's API for
        drug interaction information.
      </Text>
      <Text style={styles.text}>
        If you want to connect or see more of my work, check out my profiles:
      </Text>
      <Pressable
        onPress={() =>
          Linking.openURL("https://www.linkedin.com/in/habib-el-hourani/")
        }
      >
        <View style={styles.listItem}>
          <FontAwesome name="linkedin-square" size={24} color="black" />
          <Text style={[styles.text, styles.link]}>LinkedIn</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => Linking.openURL("https://github.com/hhourani27/")}
      >
        <View style={styles.listItem}>
          <FontAwesome name="github" size={24} color="black" />
          <Text style={[styles.text, styles.link]}>GitHub</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 20,

    padding: 20,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 10,
  },
  text: { fontSize: 20 },
  link: {
    color: "#1E90FF",
  },
});
