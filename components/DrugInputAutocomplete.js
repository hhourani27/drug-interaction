import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";

export function DrugInputAutocomplete({ onValueSelect }) {
  const [query, setQuery] = useState("");

  const data = ["Apple", "Banana", "Cherry", "Date"];

  const filter = () => {
    if (query === "") return [];
    return data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  const dropdownItems = filter();

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
      {dropdownItems.length > 0 && (
        <FlatList
          style={styles.dropdownlist}
          data={dropdownItems}
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F6F6F6",
    opacity: 1,
    zIndex: 1000,
  },

  dropdownItem: {
    height: 50,
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
