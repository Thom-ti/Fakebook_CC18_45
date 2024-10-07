import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null,
  loading: false,
  getAllPosts: async (token) => {
    set({ loading: true });
    const result = await axios.get("http://localhost:8899/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set({ posts: result.data.posts, loading: false });
  },
  createPost: async (token, body, user) => {
    const result = await axios.post("http://localhost:8899/post", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set((state) => ({
      posts: [{ ...result.data, user }, ...state.posts],
    }));
  },
  deletePost: async (token, id) => {
    const result = await axios.delete(`http://localhost:8899/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set((state) => ({
      posts: state.posts.filter((el) => el.id !== id),
    }));
  },
  setCurrentPost: (post) => {
    set({ currentPost: post });
  },
}));

export default usePostStore;
