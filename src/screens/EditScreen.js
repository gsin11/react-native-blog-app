import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../context/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function EditScreen({ navigation, route }) {
  const { id } = route.params;
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.goBack());
      }}
    />
  );
}

const styles = StyleSheet.create({});
