import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Nav from "./Nav";
import navIcons from "../data/nav";

const NavList = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerIcons}>
        {navIcons.map((icon, index) => {
          return <Nav key={index} icon={icon.icon} />;
        })}
      </View>
    </View>
  );
};

export default NavList;

const styles = StyleSheet.create({
  footer: {
    bottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 54,
  },
});
