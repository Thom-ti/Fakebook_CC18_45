import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";
import PostFormEdit from "./PostFormEdit";

const PostContainer = () => {
  const posts = usePostStore((state) => state.posts);
  const token = useUserStore((state) => state.token);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);
  const currentPost = usePostStore((state) => state.currentPost);

  useEffect(() => {
    getAllPosts(token);
  }, []);

  return (
    <>
      <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
        <CreatePost />
        {posts.map((el) => (
          <PostItem key={el.id} post={el} />
        ))}
      </div>
      {/* modal */}
      <dialog
        id="editform-modal"
        className="modal"
        onClose={() => setCurrentPost(null)}
      >
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
          {currentPost && <PostFormEdit />}
        </div>
      </dialog>
    </>
  );
};

export default PostContainer;
