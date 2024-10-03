import {
  Bell,
  FacebookIcon,
  Handshake,
  HomeIcon,
  Menu,
  MessageCircle,
  Search,
  Store,
  TvMinimalPlay,
} from "lucide-react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <header className="h-14 w-full fixed top-0 z-10 px-1 flex justify-between shadow-lg bg-white">
      {/* Logo + input */}
      <div className="flex gap-2 items-center flex-1">
        <FacebookIcon
          size={24}
          color="blue"
          className="w-12 h-12 p-1 border-2 border-blue-700 rounded-full hover:cursor-pointer"
        />
        <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <Search color="gray" />
        </label>
      </div>
      {/* Center group-icons */}
      <div className="flex gap-2 flex-1 justify-center items-center">
        <div className="flex justify-center w-20 hover:cursor-pointer hover:border-b-2 hover:border-blue-900">
          <HomeIcon size={36} color="gray" className="w-2/5" />
        </div>
        <div className="flex justify-center w-20 hover:cursor-pointer hover:border-b-2 hover:border-blue-900">
          <TvMinimalPlay size={36} color="gray" className="w-2/5" />
        </div>
        <div className="flex justify-center w-20 hover:cursor-pointer hover:border-b-2 hover:border-blue-900">
          <Store size={36} color="gray" className="w-2/5" />
        </div>
        <div className="flex justify-center w-20 hover:cursor-pointer hover:border-b-2 hover:border-blue-900">
          <Handshake size={36} color="gray" className="w-2/5" />
        </div>
      </div>
      {/* Right menu */}
      <div className="flex gap-3 flex-1 justify-end">
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <Menu className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessageCircle className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <Bell className="w-5" />
          </div>
        </div>
        <div className="dropdown dropdown-end mt-2">
          <div tabIndex={0} role="button" className="">
            <Avatar
              className="w-10 h-10 rounded-full"
              imgSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
