import { ImagesIcon, RadioIcon } from "lucide-react";
import Avatar from "./Avatar";
import useUserStore from "../stores/userStore";
import PostForm from "./PostForm";

const CreatePost = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex gap-2">
            <Avatar
              imgSrc={user.profileImage}
              className="w-10 h-10 rounded-full"
            />
            <button
              className="btn flex-1 rounded-full justify-start"
              onClick={() =>
                document.getElementById("postform-modal").showModal()
              }
            >
              What do you think?
            </button>
          </div>
          <div className="divider mt-1 mb-0"></div>
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
              <RadioIcon color="red" className="h-6 w-6" />
              Livestream
            </div>
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2">
              <ImagesIcon color="green" className="h-6 w-6" />
              Photo / Video
            </div>
          </div>
        </div>
      </div>
      <dialog id="postform-modal" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
          <PostForm />
        </div>
      </dialog>
    </>
  );
};

export default CreatePost;
