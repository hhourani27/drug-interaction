import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as cheerio from "cheerio";
import { FoodInteractionBox } from "../components/FoodInteractionBox";
import { Ionicons } from "@expo/vector-icons";
import { DrugPicker } from "../components/DrugPicker";

export function FoodInteractionsPage() {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [loadingInteractions, setLoadingInteractions] = useState(false);
  const [interactions, setInteractions] = useState(null);

  const fetchAndSetInteractions = useCallback(async (selectedDrugs) => {
    console.log("fetchAndSetInteractions");

    if (selectedDrugs.length < 1) {
      setInteractions([]);
    } else {
      try {
        setLoadingInteractions(true);

        // Create request
        const encodedFormBody = selectedDrugs
          .reduce(
            (acc, curr) => [
              ...acc,
              `${encodeURIComponent(
                "product_concept_ids[]"
              )}=${encodeURIComponent(curr.id)}`,
              `${encodeURIComponent(
                "product_concept_names[]"
              )}=${encodeURIComponent(curr.name)}`,
            ],
            []
          )
          .join("&");

        console.log(encodedFormBody);

        // Send request
        const response = await fetch(
          `https://go.drugbank.com/food-interaction-checker`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encodedFormBody,
          }
        );
        const responseText = await response.text();

        // Parse and extract interaction data
        const $ = cheerio.load(responseText);

        const interactions = $(".food-interactions tr.success")
          .map((idx, elem) => ({
            drug: $(elem).find("a").text(),
            interactions: $(elem)
              .nextUntil("tr.success")
              .map((idx, elem) => $(elem).text())
              .toArray(),
            // ,
          }))
          .toArray();

        console.log(interactions);

        setLoadingInteractions(false);
        setInteractions(interactions);
      } catch (error) {
        console.error("Error fetching drug options:", error);
        setLoadingInteractions(false);
        setInteractions(interactions);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedDrugs.length < 1) {
      setInteractions(null);
    } else {
      fetchAndSetInteractions(selectedDrugs);
    }
  }, [selectedDrugs, fetchAndSetInteractions, setInteractions]);

  return (
    <View style={styles.container}>
      <DrugPicker
        selectedDrugs={selectedDrugs}
        onDrugSelectionChange={setSelectedDrugs}
      />
      <View style={styles.interactionSection}>
        {loadingInteractions ? (
          <ActivityIndicator style={styles.spinner} />
        ) : interactions && interactions.length > 0 ? (
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={interactions}
            renderItem={({ item }) => (
              <FoodInteractionBox foodInteraction={item} />
            )}
          />
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            {interactions && interactions.length === 0 ? (
              <>
                <Ionicons name="warning-outline" size={16} />
                <Text style={{ flex: 1, flexWrap: "wrap" }}>
                  No interactions were found, but it does not necessarily mean
                  that no interactions exist.
                </Text>
              </>
            ) : (
              <>
                <Ionicons name="information-circle-outline" size={16} />
                <Text style={{ flex: 1, flexWrap: "wrap" }}>
                  Select at least 1 drug to display interactions.
                </Text>
              </>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    gap: 20,

    padding: 20,
  },

  interactionSection: {
    borderTopColor: "#343047",
    borderTopWidth: 1,
    paddingTop: 10,
    flex: 1,
  },

  spinner: { paddingTop: 20 },
});
