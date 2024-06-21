import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect, useCallback, useRef } from "react";

export function DrugInputAutocomplete({ onDrugSelect }) {
  const [query, setQuery] = useState("");
  const [drugOptions, setDrugOptions] = useState([]);
  const [loadingDrugOptions, setLoadingDrugOptions] = useState(false);
  const abortControllerRef = useRef(null); // Ref to store the current AbortController

  const fetchAndSetDrugs = useCallback(async (queryString) => {
    if (queryString.length < 2) {
      setDrugOptions([]);
      return;
    }

    // Abort any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create a new AbortController
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setLoadingDrugOptions(true);
      const response = await fetch(
        `https://go.drugbank.com/interaction_concept_search?term=${queryString}&_type=query&q=${queryString}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json(); // Await JSON parsing
      const drugs = json.map((d) => ({ id: d.drugbank_pcid, name: d.name }));

      setLoadingDrugOptions(false);
      setDrugOptions(drugs);
    } catch (error) {
      if (error.name !== "AbortError") {
        setLoadingDrugOptions(false);
        setDrugOptions([]);
      }
    }
  }, []);

  useEffect(() => {
    fetchAndSetDrugs(query);
  }, [query, fetchAndSetDrugs]);

  const renderItem = (drug) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.dropdownItem,
          pressed ? styles.dropdownItemPressed : null,
        ]}
        onPress={() => {
          onDrugSelect(drug);
          setQuery("");
        }}
      >
        <Text>{drug.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.autocompleteContainer}>
      <TextInput style={styles.input} value={query} onChangeText={setQuery} />
      {!loadingDrugOptions ? (
        drugOptions.length > 0 && (
          <FlatList
            style={styles.dropdownlist}
            data={drugOptions}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="always"
          />
        )
      ) : (
        <View style={styles.dropdownlist}>
          <ActivityIndicator style={styles.spinner} />
        </View>
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

  spinner: {
    paddingTop: 20,
  },
});
