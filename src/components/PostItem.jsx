import {
  ForwardIcon,
  MessageCircle,
  MoreHorizontal,
  ThumbsUp,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import Avatar from "./Avatar";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";
import CommentContainer from "./CommentContainer";

const PostItem = (props) => {
  const { post } = props;
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const deletePost = usePostStore((state) => state.deletePost);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);
  const likePost = usePostStore((state) => state.likePost);
  const unlikePost = usePostStore((state) => state.unlikePost);

  const haveLike = post.likes.findIndex((el) => el.userId === user.id) !== -1;

  const hdlLikeClick = async (e) => {
    if(haveLike) {
      await unlikePost(token, post.id);
    } else {
      await likePost(token, {postId : post.id});
    }
    getAllPosts(token);
  }

  const hdlDelete = async (e) => {
    try {
      if (!confirm("Are you sure you want to delete this post?")) {
        return console.log("Cancel delete");
      }

      await deletePost(token, post.id);
    } catch (error) {
      const errMsg = error.response?.data?.error || error.message;
      toast.error(errMsg);
      console.log(errMsg);
    }
  };

  const hdlShowEditModal = (e) => {
    setCurrentPost(post);
    document.getElementById("editform-modal").showModal();
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar
              imgSrc={post.user.profileImage}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">{post.user.firstName}</p>
              <p className="text-xs font-bold opacity-50">777 min.</p>
            </div>
          </div>
          <div className="flex gap-2">
            {user.id === post.userId && (
              <div className="dropdown">
                <div tabIndex={0} role="button" className="">
                  <div className="avatar items-center cursor-pointer ">
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                      <MoreHorizontal className="w-6" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li onClick={hdlShowEditModal}>
                    <a>Edit</a>
                  </li>
                  <li onClick={hdlDelete}>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            )}
            <div className="avatar items-center cursor-pointer dropdown">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <X className="w-6" />
              </div>
            </div>
          </div>
        </div>
        {/* Post message */}
        <p>{post.message}</p>
        {post.image && (
          <img
            src={post.image}
            alt="post-pic"
            className="w-full h-full object-contain"
          />
        )}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar tems-end cursor-pointer gap-1">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-500 text-white">
              <ThumbsUp className="w-4 h-4" />
            </div>
            <p>ถูกใจ {post.likes.length} คน</p>
          </div>
          <div className="flex gap-2">
            <p className="opacity-60">{post.comments.length} ความคิดเห็น</p>
          </div>
        </div>

        <div className="divider h-0 my-0"></div>
        <div className="flex gap-3 justify-between">
          <div
            className={`flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ${
              haveLike ? "bg-blue-300 text-white" : ""
            }`}
            onClick={hdlLikeClick}
          >
            <ThumbsUp className="h-6 w-6" />
            ถูกใจ
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
            <MessageCircle className="h-6 w-6" />
            ความคิดเห็น
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
            <ForwardIcon className="h-6 w-6" />
            แชร์
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        <CommentContainer postId={post.id} comments={post.comments} />
      </div>
    </div>
  );
};

export default PostItem;
