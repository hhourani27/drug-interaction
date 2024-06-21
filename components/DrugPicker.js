import React from "react";

import { View, StyleSheet } from "react-native";
import { DrugInputAutocomplete } from "./DrugInputAutocomplete";
import { DrugChip } from "./DrugChip";

export function DrugPicker({ selectedDrugs, onDrugSelectionChange }) {
  return (
    <View style={styles.drugSection}>
      <DrugInputAutocomplete
        onDrugSelect={(newDrug) => {
          if (!selectedDrugs.find((d) => d.id === newDrug.id)) {
            onDrugSelectionChange((drugs) => [...drugs, newDrug]);
          }
        }}
      />
      <View style={styles.selectedDrugList}>
        {selectedDrugs.map((drug) => (
          <DrugChip
            key={drug.id}
            drugName={drug.name}
            onDelete={() => {
              onDrugSelectionChange((drugs) =>
                drugs.filter((d) => d.id !== drug.id)
              );
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drugSection: {
    gap: 10,
    flexGrow: 0,
  },
  selectedDrugList: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 5,
    columnGap: 10,
  },
});
