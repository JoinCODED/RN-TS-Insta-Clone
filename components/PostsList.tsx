import { StyleSheet, Text, View } from "react-native";
import React from "react";
import posts from "../data/posts";
import Post from "./Post";

const PostsList = () => {
  return posts.map((post) => {
    return (
      <Post
        key={post.id}
        username={post.username}
        userAvatar={post.userAvatar}
        postImage={post.postImage}
        likes={post.likes}
        caption={post.caption}
        comments={post.comments}
        timeAgo={post.timeAgo}
      />
    );
  });
};

export default PostsList;

const styles = StyleSheet.create({});
