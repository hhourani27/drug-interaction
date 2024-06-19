import { View, Pressable, Text } from "react-native";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/button_styles";

export function DrugInteractionButton({ onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconPart}>
        <FontAwesome5
          name="prescription-bottle-alt"
          size={25}
          style={styles.icon}
        />
        <FontAwesome6 name="arrows-left-right" size={25} style={styles.icon} />
        <FontAwesome5
          name="prescription-bottle-alt"
          size={25}
          style={styles.icon}
        />
      </View>
      <View style={styles.textPart}>
        <Text style={styles.text}>Drug interactions</Text>
      </View>
    </Pressable>
  );
}
