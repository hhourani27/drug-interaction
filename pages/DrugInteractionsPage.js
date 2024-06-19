import { StyleSheet, Text, View } from "react-native";

export function DrugInteractionsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DrugInteractionsPage</Text>
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
});
