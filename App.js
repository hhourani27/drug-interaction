import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { DrugInteractionButton } from "./components/DrugInteractionButton";
import { FoodInteractionButton } from "./components/FoodInteractionButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Drug Interaction Browser</Text>
        <Text style={styles.subtitle}>Search</Text>
        <View style={styles.buttonContainer}>
          <DrugInteractionButton />
          <FoodInteractionButton />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
