import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";
import StoriesList from "./components/StoriesList";
import PostsList from "./components/PostsList";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoriesList />
        <PostsList />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
