import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../components/Header";
import stories from "../data/stories";
import Stories from "../components/Stories";

const StoriesList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyContainer}
      >
        {stories.map((str) => (
          <Stories
            key={str.id}
            username={str.username}
            avatar={str.avatar}
            hasStory={str.hasStory}
            isYourStory={str.isYourStory}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default StoriesList;

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,

    gap: 12,
  },
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    marginBottom: 9,
  },
});
