import React from "react";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

const CommentContainer = (props) => {
  const { postID } = props
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xs">see all comments</div>
      <CommentItem />
      <CommentForm postID={postID} />
    </div>
  );
};

export default CommentContainer;
