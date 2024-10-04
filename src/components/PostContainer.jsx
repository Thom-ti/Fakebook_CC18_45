import { useEffect } from "react";
import usePostStore from "../stores/postStore";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import useUserStore from "../stores/userStore";

const PostContainer = () => {
  const posts = usePostStore((state) => state.posts);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    getAllPosts(token);
  }, []);
  
  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
      <CreatePost />
      {posts.map((el) => (
        <PostItem key={el.id} post={el} />
      ))}
    </div>
  );
};

export default PostContainer;
