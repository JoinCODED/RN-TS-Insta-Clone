import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
interface StoriesProp {
  username: string;
  avatar: string;
  hasStory: boolean;
  isYourStory?: boolean;
}

const Stories = ({ username, avatar, hasStory, isYourStory }: StoriesProp) => {
  return (
    <View style={styles.story}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.storyImgTouch}>
          <Image style={styles.storyImg} source={{ uri: avatar }} />
          {isYourStory ? (
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
      <Text style={styles.storyUser}>{username}</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },
  imageContainer: {
    position: "relative",
  },
  storyImgTouch: {
    borderWidth: 3,
    borderColor: "#D583A0",
    padding: 4,
    borderRadius: 1000,
    marginBottom: 3,
  },
  storyImg: {
    width: 70,
    height: 70,
    borderRadius: 300,
  },
  storyUser: {
    fontSize: 15,
  },
  plusContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 22,
    height: 22,
    backgroundColor: "#0794EB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  plus: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 14,
    includeFontPadding: false,
  },
});
