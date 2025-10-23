import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const NavItem = ({ icon }: { icon: string }) => {
  return (
    <TouchableOpacity style={styles.navButton}>
      <Text style={styles.navIcon}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default NavItem;

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
