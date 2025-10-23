import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import posts from "../data/posts";

interface Post {
  id: number;
  username: string;
  userAvatar: string;
  postImage: string;
  likes: number;
  caption: string;
  comments: number;
  timeAgo: string;
}

const PostCard = ({
  id,
  username,
  userAvatar,
  postImage,
  likes,
  caption,
  comments,
  timeAgo,
}: Post) => {
  return (
    <View key={id} style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.postUserInfo}>
          <Image source={{ uri: userAvatar }} style={styles.postAvatar} />
          <Text style={styles.postUsername}>{username}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.moreIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <View style={styles.postImageContainer}>
        <Image
          source={{ uri: postImage }}
          style={styles.postImage}
          resizeMode="cover"
        />
      </View>

      {/* Post Actions */}
      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>✈</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.actionIcon}>🔖</Text>
        </TouchableOpacity>
      </View>

      {/* Likes Count */}
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>
          <Text style={styles.likesBold}>{likes.toLocaleString()}</Text> likes
        </Text>
      </View>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>
          <Text style={styles.captionUsername}>{username}</Text> {caption}
        </Text>
      </View>

      {/* Comments Preview */}
      <TouchableOpacity style={styles.commentsPreview}>
        <Text style={styles.commentsPreviewText}>
          View all {comments} comments
        </Text>
      </TouchableOpacity>

      {/* Time */}
      <Text style={styles.timeText}>{timeAgo}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  // Post Header
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  postUserInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  postUsername: {
    fontSize: 14,
    fontWeight: "600",
  },
  moreIcon: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // Post Image
  postImageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f9f9f9",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  // Post Actions
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  postActionsLeft: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    padding: 4,
  },
  actionIcon: {
    fontSize: 24,
  },
  // Likes
  likesContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  likesText: {
    fontSize: 14,
  },
  likesBold: {
    fontWeight: "600",
  },
  // Caption
  captionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  captionText: {
    fontSize: 14,
    lineHeight: 18,
  },
  captionUsername: {
    fontWeight: "600",
  },
  // Comments
  commentsPreview: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  commentsPreviewText: {
    fontSize: 14,
    color: "#737373",
  },
  // Time
  timeText: {
    fontSize: 12,
    color: "#999",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  feedContainer: {
    paddingBottom: 20,
  },
  postContainer: {
    marginBottom: 16,
  },
});
