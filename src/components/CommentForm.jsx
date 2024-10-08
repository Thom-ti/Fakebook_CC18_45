import { useState } from "react";
import Avatar from "./Avatar";
import { SendIcon } from "lucide-react";
import { toast } from "react-toastify";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";

const CommentForm = (props) => {
  const { postId } = props;
  const [message, setMessage] = useState("");
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const commentPost = usePostStore((state) => state.commentPost);
  const getAllPosts = usePostStore((state) => state.getAllPosts);

  const hdlSendComment = async (e) => {
    try {
      if (!message.trim()) {
        return toast.error("Please fill comment");
      }
      const body = {
        message,
        postId,
      };
      await commentPost(token, body);
      getAllPosts(token);
      setMessage("");
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
      console.log(errMsg);
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-3 items-start">
        <Avatar className="w-10 h-10 rounded-full" imgSrc={user.profileImage} />
        <textarea
          className="textarea w-full p-1 leading-5"
          row={1}
          placeholder={`comment by ${user.firstName} ${user.lastName}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        className="btn btn-circle btn-sm absolute bottom-1 right-2"
        onClick={hdlSendComment}
      >
        <SendIcon className="w-6" />
      </button>
    </div>
  );
};

export default CommentForm;
