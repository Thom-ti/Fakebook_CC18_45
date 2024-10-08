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
  updatePost: async (token, body, id) => {
    const result = await axios.put(`http://localhost:8899/post/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  commentPost: async (token, body) => {
    const result = await axios.post("http://localhost:8899/comment", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  likePost: async (token, body) => {
    const result = await axios.post(`http://localhost:8899/like`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  unlikePost: async (token, id) => {
    const result = await axios.delete(`http://localhost:8899/like/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
}));

export default usePostStore;
