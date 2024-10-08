import { useState } from "react";
import Avatar from "./Avatar";
import useUserStore from "../stores/userStore";
import { ImagesIcon } from "lucide-react";
import { toast } from "react-toastify";
import usePostStore from "../stores/postStore";
import AddPicture from "./AddPicture";

const PostFormEdit = () => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const currentPost = usePostStore((state) => state.currentPost);
  const updatePost = usePostStore((state) => state.updatePost);

  const [message, setMessage] = useState(currentPost.message);
  const [addPicture, setAddPicture] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const hdlChange = (e) => {
    setMessage(e.target.value);
  };

  const hdlUpdatePost = async (e) => {
    console.log();

    try {
      setLoading(true);
      const body = new FormData(); // for sending files
      body.append("message", message);

      if (file) {
        body.append("image", file);
      }

      await updatePost(token, body, currentPost.id);
      getAllPosts(token);
      e.target.closest("dialog").close();
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      console.log(errMsg);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {loading && (
        <span className="loading loading-dots loading-xs">loading...</span>
      )}
      <h3 className="text-xl text-center">Update Post</h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className="w-10 h-10 rounded-full" imgSrc={user.profileImage} />
        <div className="flex flex-col">
          <div className="text-sm">
            {user.firstName} {user.lastName}
          </div>
          <select
            className="select bg-slate-200 select-xs w-full max-w-xs"
            defaultValue={"Who can see?"}
          >
            <option disabled>Who can see?</option>
            <option>Public</option>
            <option>Friends</option>
            <option>Only Me</option>
          </select>
        </div>
      </div>
      <textarea
        className="textarea textarea-ghost"
        placeholder={`What do you think? ${user.firstName}`}
        value={message}
        onChange={hdlChange}
        rows={message.split("\n").length}
      ></textarea>
      {currentPost.image && (
        <div className="border flex justify-evenly items-center">
          <img src={currentPost.image} className="h-[100px] object-contain" />
          <button className="btn btn-sm">Remove</button>
        </div>
      )}
      {addPicture && (
        <AddPicture
          closeMe={() => setAddPicture(false)}
          file={file}f
          setFile={setFile}
        />
      )}
      <div className="flex border rounded-lg p-2 justify-center items-center">
        <p>Add with your post</p>
        <div className="flex gap-2">
          <div
            onClick={() => setAddPicture((prv) => !prv)}
            className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-200 flex justify-center items-center active:scale-110 "
          >
            <ImagesIcon className="w-6" color="green" />
          </div>
        </div>
      </div>
      <button
        className={`btn btn-sm ${
          message.trim() ? "btn-primary" : "btn-disabled"
        }`}
        onClick={hdlUpdatePost}
      >
        Update Post
      </button>
    </div>
  );
};

export default PostFormEdit;
