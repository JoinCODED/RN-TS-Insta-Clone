import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import posts from "../data/posts";
interface postProp {
  username: string;
  userAvatar: string;
  postImage: string;
  likes: number;
  caption: string;
  comments: number;
  timeAgo: string;
}

const format = (num: number) => {
  if (num >= 1000) {
    return num.toLocaleString();
  }
  return num.toString();
};

const Post = ({
  username,
  userAvatar,
  postImage,
  likes,
  caption,
  comments,
  timeAgo,
}: postProp) => {
  return (
    <View style={styles.post}>
      <View style={styles.postTop}>
        <View style={styles.postName}>
          <Image style={styles.userAvatar} source={{ uri: userAvatar }} />
          <Text style={styles.userName}>{username}</Text>
        </View>

        <Text style={styles.postMoreText}>...</Text>
      </View>
      <Image style={styles.postImage} source={{ uri: postImage }} />
      <View style={styles.postBottom}>
        <Text style={styles.postBottomIconOdd}>❤️</Text>
        <Text style={styles.postBottomIconEven}>💬</Text>
        <Text style={[styles.postBottomIconOdd, styles.lastIcon]}>✈️</Text>
        <Text style={styles.postBottomIconEven}>🏷️</Text>
      </View>
      <View style={styles.postInfo}>
        <Text style={styles.postLike}>
          <Text style={styles.likesNum}>{format(likes) + ` `}</Text>Likes
        </Text>
        <Text style={styles.postCaption}>
          <Text style={styles.captionUser}> {username}</Text>
          {` ` + caption}
        </Text>
        <Text
          style={styles.postComments}
        >{`View all ${comments} comments`}</Text>
        <Text style={styles.postTime}>{timeAgo}</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {},
  postTop: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 9,
  },
  postName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: "auto",
  },
  userAvatar: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  userName: {
    fontSize: 15,
    fontWeight: 500,
  },
  postMoreText: {
    fontSize: 20,
    fontWeight: 700,
    paddingBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  postBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginHorizontal: 20,
    marginVertical: 12,
  },
  postBottomIconOdd: {
    fontSize: 20,
  },
  postBottomIconEven: {
    fontSize: 24,
  },
  lastIcon: {
    marginRight: "auto",
  },
  postInfo: {
    marginHorizontal: 12,
  },
  postLike: {
    marginBottom: 8,
    fontSize: 15,
  },
  likesNum: {
    fontWeight: 600,
  },
  postCaption: {
    marginBottom: 6,
    lineHeight: 17,
    fontSize: 15,
  },
  captionUser: {
    fontWeight: 600,
  },
  postComments: {
    marginBottom: 6,
    fontSize: 15,
    color: "rgba(0,0,0,0.5)",
  },
  postTime: {
    marginBottom: 32,
    fontSize: 13,
    color: "rgba(0,0,0,0.3)",
  },
});
