import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { DrugInputAutocomplete } from "../components/DrugInputAutocomplete";
import { DrugChip } from "../components/DrugChip";

export function DrugInteractionsPage() {
  const [selectedDrugs, setSelectedDrugs] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.drugSection}>
        <DrugInputAutocomplete
          onValueSelect={(value) =>
            setSelectedDrugs((state) => [...state, value])
          }
        />
        <View style={styles.selectedDrugList}>
          {selectedDrugs.map((drug) => (
            <DrugChip
              key={drug}
              drug={drug}
              onDelete={(drug) => {
                setSelectedDrugs((state) => state.filter((v) => v !== drug));
              }}
            />
          ))}
        </View>
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
});
