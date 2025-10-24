import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.appTitle}>Instagram</Text>
      <Text style={styles.appTitleHeart}>❤️</Text>
      <Text style={styles.appTitleEmail}>✉️</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 16,
    gap: 38,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 600,
    marginRight: "auto",
  },
  appTitleHeart: {
    fontSize: 18,
  },
  appTitleEmail: {
    fontSize: 20,
  },
});
