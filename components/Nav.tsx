import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface navProp {
  icon: string;
}
const Nav = ({ icon }: navProp) => {
  return <Text style={styles.footerIcon}>{icon}</Text>;
};

export default Nav;

const styles = StyleSheet.create({
  footerIcon: {
    fontSize: 24,
  },
});
