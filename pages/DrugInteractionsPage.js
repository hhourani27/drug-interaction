import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { DrugInputAutocomplete } from "../components/DrugInputAutocomplete";
import { DrugChip } from "../components/DrugChip";

export function DrugInteractionsPage() {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [loadingInteractions, setLoadingInteractions] = useState(false);
  const [interactions, setInteractions] = useState(null);

  const fetchAndSetInteractions = useCallback(async (selectedDrugs) => {
    if (selectedDrugs.length < 2) {
      setInteractions([]);
    } else {
      try {
        setLoadingInteractions(true);

        // Create request
        // const encodedFormBody = selectedDrugs.reduce((acc,curr) => )

        // const response = await fetch(
        //   `https://go.drugbank.com/interaction_concept_search?term=${queryString}&_type=query&q=${queryString}`
        // );
        // const responseText = await response.text(); // Await JSON parsing
        // console.log(responseText);

        setLoadingInteractions(false);
        setInteractions(null); // TODO: change that
      } catch (error) {
        console.error("Error fetching drug options:", error);
        setLoadingInteractions(false);
        setInteractions(null); // TODO: change that
      }
    }
  }, []);

  useEffect(() => {
    if (selectedDrugs.length < 2) {
      setInteractions(null);
    } else {
      fetchAndSetInteractions(selectedDrugs);
    }
  }, [selectedDrugs, fetchAndSetInteractions, setInteractions]);

  return (
    <View style={styles.container}>
      <View style={styles.drugSection}>
        <DrugInputAutocomplete
          onDrugSelect={(drug) => setSelectedDrugs((state) => [...state, drug])}
        />
        <View style={styles.selectedDrugList}>
          {selectedDrugs.map((drug) => (
            <DrugChip
              key={drug.id}
              drugName={drug.name}
              onDelete={() => {
                setSelectedDrugs((state) =>
                  state.filter((d) => d.id !== drug.id)
                );
              }}
            />
          ))}
        </View>
      </View>
      <View style={styles.interactionSection}>
        {!loadingInteractions ? null : (
          <ActivityIndicator style={styles.spinner} />
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

    padding: 20,
  },
  drugSection: {
    gap: 10,
  },
  selectedDrugList: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 5,
    columnGap: 10,
  },
  resultSection: {},

  interactionSection: {},

  spinner: { paddingTop: 20 },
});
