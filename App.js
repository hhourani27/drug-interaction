import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DrugInteractionButton } from "./components/DrugInteractionButton";
import { FoodInteractionButton } from "./components/FoodInteractionButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrugInteractionsPage } from "./pages/DrugInteractionsPage";
import { FoodInteractionsPage } from "./pages/FoodInteractionsPage";
import { AboutPage } from "./pages/AboutPage";
import HeaderInfoButton from "./components/HeaderInfoButton";
import { Disclaimer } from "./components/Disclaimer";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Drug Interaction Checker</Text>
          <Text style={styles.subtitle}>Browse drugs for interactions</Text>
        </View>
        <View style={styles.buttonContainer}>
          <DrugInteractionButton
            onPress={() => navigation.navigate("Drug Interactions")}
          />
          <FoodInteractionButton
            onPress={() => navigation.navigate("Food Interactions")}
          />
        </View>
      </View>
      <Disclaimer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",

    padding: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 60,
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

  infoIcon: {
    color: "white",
  },
  infoIconPressed: {
    color: "#F6E7E5",
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#F9533B" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerRight: () => <HeaderInfoButton />,
          }}
        />
        <Stack.Screen
          name="Drug Interactions"
          component={DrugInteractionsPage}
        />
        <Stack.Screen
          name="Food Interactions"
          component={FoodInteractionsPage}
        />
        <Stack.Screen name="About" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
