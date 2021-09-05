import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

export default function IndexScreen() {
  const { state, addBlogPost, removeBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(post) => post.title}
        data={state}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
              <Feather name="trash" color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
