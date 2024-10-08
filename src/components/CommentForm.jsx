import { useState } from "react";
import Avatar from "./Avatar";
import { SendIcon } from "lucide-react";
import { toast } from "react-toastify";

const CommentForm = (props) => {
  const { postID } = props;
  const [message, setMessage] = useState("");

  const hdlSendComment = async (e) => {
    try {
      if (!message.trim()) {
        return toast.error("Please fill comment");
      }
      const body = {
        message,
        postID,
      };
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
      console.log(errMsg);
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-3 items-start">
        <Avatar className="w-10 h-10 rounded-full" />
        <textarea
          className="textarea w-full p-1 leading-5"
          row={1}
          placeholder={`comment by Andy Codecamp`}
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
