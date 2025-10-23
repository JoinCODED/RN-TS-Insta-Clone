import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import navIcons from "../data/nav";
import NavItem from "./NavItem";

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      {navIcons.map((icon) => (
        <NavItem key={icon.name} icon={icon.icon} />
      ))}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: "#dbdbdb",
    backgroundColor: "#fff",
  },
  navButton: {
    padding: 8,
  },
  navIcon: {
    fontSize: 24,
  },
  navAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  navAvatarText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#666",
  },
});
