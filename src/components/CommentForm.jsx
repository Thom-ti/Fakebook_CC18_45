import React from "react";
import Avatar from "./Avatar";

const CommentForm = () => {
  return (
    <div className="relative">
      <div className="flex gap-3 items-start">
        <Avatar className="w-10 h-10 rounded-full" />
        <textarea
          className="textarea w-full p-1 leading-5"
          row={1}
          placeholder={`comment by Andy Codecamp`}
        ></textarea>
      </div>
      <button className="btn btn-circle btn-sm absolute bottom-1 right-2">
        Send
      </button>
    </div>
  );
};

export default CommentForm;
