import React from "react";
import Avatar from "./Avatar";

const CommentItem = () => {
  return (
    <div className="flex gap-2">
      <Avatar className="w-10 h-10 rounded-full" />
      <div className="flex flex-col border bg-slate-100 flex-1 rounded-lg p-1 px-2 text-xs leading-5">
        <div className="font-bold">Andy Codecamp</div>
        <p>This is comment</p>
      </div>
    </div>
  );
};

export default CommentItem;
