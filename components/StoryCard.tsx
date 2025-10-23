import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface Story {
  id: number;
  username: string;
  avatar: string;
  hasStory: boolean;
  isYourStory: boolean;
}

const StoryCard = ({ id, username, avatar, hasStory, isYourStory }: Story) => {
  return (
    <View key={id} style={styles.storyItem}>
      <View style={[styles.storyBorder, hasStory && styles.storyBorderActive]}>
        <View style={styles.storyAvatarContainer}>
          <Image source={{ uri: avatar }} style={styles.storyAvatar} />
        </View>
        {isYourStory && (
          <View style={styles.addStoryButton}>
            <Text style={styles.addStoryText}>+</Text>
          </View>
        )}
      </View>
      <Text style={styles.storyUsername} numberOfLines={1}>
        {username}
      </Text>
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  storiesContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
  storyItem: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 70,
  },
  storyBorder: {
    padding: 2,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#dbdbdb",
  },
  storyBorderActive: {
    borderColor: "#E1306C",
  },
  storyAvatarContainer: {
    borderRadius: 38,
    padding: 2,
    backgroundColor: "#fff",
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addStoryButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#0095F6",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  addStoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  storyUsername: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
});
