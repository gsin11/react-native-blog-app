import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../context/BlogPostForm";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.goBack());
      }}
    />
  );
}

const styles = StyleSheet.create({});
