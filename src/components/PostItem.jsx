import {
  ImagesIcon,
  MessageCircle,
  MoreHorizontal,
  ThumbsUp,
  X,
} from "lucide-react";
import Avatar from "./Avatar";

const PostItem = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <p className="font-bold">Andy Codecamp</p>
              <p className="text-xs font-bold opacity-50">59 min.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="avatar items-center cursor-pointer dropdown">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <MoreHorizontal className="w-6" />
              </div>
            </div>
            <div className="avatar items-center cursor-pointer dropdown">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <X className="w-6" />
              </div>
            </div>
          </div>
        </div>
        {/* Post message */}
        <p>This is caption</p>

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