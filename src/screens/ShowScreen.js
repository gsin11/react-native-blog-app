import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { id } = route.params;
  const { state } = useContext(Context);

  const post = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});
