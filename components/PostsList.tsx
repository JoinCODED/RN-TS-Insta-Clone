import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import posts from "../data/posts";
import PostCard from "./PostCard";

const PostsList = () => {
  return (
    <View style={styles.feedContainer}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          username={post.username}
          userAvatar={post.userAvatar}
          postImage={post.postImage}
          likes={post.likes}
          caption={post.caption}
          comments={post.comments}
          timeAgo={post.timeAgo}
        />
      ))}
    </View>
  );
};

export default PostsList;

const styles = StyleSheet.create({
  feedContainer: {
    paddingBottom: 20,
  },
});
