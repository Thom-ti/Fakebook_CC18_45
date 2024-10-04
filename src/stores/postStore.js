import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null,
  loading: false,
  createPost: async (token, body) => {
    const result = await axios.post("http://localhost:8899/post", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // get().getAllPosts(token); // สั่งให้ get ข้อมูลใหม่ (posts)
    return result.data;
  },
  getAllPosts: async (token) => {
    set({ loading: true });
    const result = await axios.get("http://localhost:8899/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set({ posts: result.data.posts, loading: false });
  },
}));

export default usePostStore;
