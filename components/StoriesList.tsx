import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import stories from "../data/stories";
import StoryCard from "./StoryCard";

const StoriesList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Stories Section */}
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              username={story.username}
              avatar={story.avatar}
              hasStory={story.hasStory}
              isYourStory={story.id === 1}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default StoriesList;

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
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  storyAvatarText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
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
