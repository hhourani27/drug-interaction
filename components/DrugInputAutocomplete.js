import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { useState, useEffect, useCallback } from "react";

export function DrugInputAutocomplete({ onValueSelect }) {
  const [query, setQuery] = useState("");
  const [drugOptions, setDrugOptions] = useState([]);

  const fetchAndSetDrugs = useCallback(async (queryString) => {
    if (queryString.length < 2) {
      setDrugOptions([]);
    } else {
      try {
        const response = await fetch(
          `https://go.drugbank.com/interaction_concept_search?term=${queryString}&_type=query&q=${queryString}`
        );
        const json = await response.json(); // Await JSON parsing
        const drugs = json.map((v) => v.name);

        setDrugOptions(drugs);
      } catch (error) {
        console.error("Error fetching drug options:", error);
        setDrugOptions([]);
      }
    }
  }, []);

  useEffect(() => {
    fetchAndSetDrugs(query);
  }, [query, fetchAndSetDrugs]);

  const renderItem = (item) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.dropdownItem,
          pressed ? styles.dropdownItemPressed : null,
        ]}
        onPress={() => {
          onValueSelect(item);
          setQuery("");
        }}
      >
        <Text>{item}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.autocompleteContainer}>
      <TextInput style={styles.input} value={query} onChangeText={setQuery} />
      {drugOptions.length > 0 && (
        <FlatList
          style={styles.dropdownlist}
          data={drugOptions}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  autocompleteContainer: { position: "relative" },
  input: {
    height: 40,
    borderRadius: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#343047",
    padding: 10,
  },
  dropdownlist: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,

    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F6F6F6",
    opacity: 1,
    zIndex: 1000,
  },

  dropdownItem: {
    minHeight: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 10,
  },

  dropdownItemPressed: {
    backgroundColor: "#F6E7E5",
  },
});
