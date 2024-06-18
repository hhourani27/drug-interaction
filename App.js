import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DrugInteractionButton } from "./components/DrugInteractionButton";
import { FoodInteractionButton } from "./components/FoodInteractionButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Drug Interaction Browser</Text>
          <Text style={styles.subtitle}>Pick a page</Text>
        </View>
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
    gap: 30,
  },
  textContainer: {},
  title: {
    color: "#F9533B",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#343047",
    fontWeight: "bold",
  },
  buttonContainer: {
    gap: 20,
  },
});
