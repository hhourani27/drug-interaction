import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DrugInteractionButton } from "./components/DrugInteractionButton";
import { FoodInteractionButton } from "./components/FoodInteractionButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrugInteractionsPage } from "./pages/DrugInteractionsPage";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Drug Interaction Browser</Text>
          <Text style={styles.subtitle}>Pick a page</Text>
        </View>
        <View style={styles.buttonContainer}>
          <DrugInteractionButton
            onPress={() => navigation.navigate("Drug Interactions")}
          />
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="Drug Interactions"
          component={DrugInteractionsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
