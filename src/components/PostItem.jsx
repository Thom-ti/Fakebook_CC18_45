import {
  ImagesIcon,
  MessageCircle,
  MoreHorizontal,
  ThumbsUp,
  X,
} from "lucide-react";
import Avatar from "./Avatar";
import useUserStore from "../stores/userStore";

const PostItem = (props) => {
  const { post } = props;
  const user = useUserStore((state) => state.user);
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
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
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
            className="w-full h-full object-cover rounded-lg"
          />
        )}

        <div className="divider h-0 my-0"></div>
        <div className="flex gap-3 justify-between">
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
            <ThumbsUp className="h-6 w-6" />
            Like
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
            <MessageCircle className="h-6 w-6" />
            Comment
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
            <ImagesIcon className="h-6 w-6" />
            Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
      </div>
    </div>
  );
};

export default PostItem;
