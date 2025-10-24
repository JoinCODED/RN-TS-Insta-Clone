import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "./components/Header";
import StoriesList from "./components/StoriesList";
import PostsList from "./components/PostsList";
import NavList from "./components/NavList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <StoriesList />
        <PostsList />
      </ScrollView>
      <NavList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 54,
    paddingBottom: 24,
  },
});
