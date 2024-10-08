import React from "react";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

const CommentContainer = (props) => {
  const { postId, comments } = props
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xs">see all comments</div>
      {comments.map((el) => (
        <CommentItem key={el.id} comment={el} />
      ))}
      <CommentForm postId={postId} />
    </div>
  );
};

export default CommentContainer;
