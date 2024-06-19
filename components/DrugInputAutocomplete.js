import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Item,
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

  return (
    <View style={styles.autocompleteContainer}>
      <TextInput style={styles.input} value={query} onChangeText={setQuery} />
      {dropdownItems.length > 0 && (
        <FlatList
          data={dropdownItems}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  autocompleteContainer: {},
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 10,
  },
});
