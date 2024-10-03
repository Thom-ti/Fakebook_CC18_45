import {
  CircleChevronDown,
  ClockAlert,
  Handshake,
  Pin,
  Store,
  TvMinimalPlay,
  Users,
} from "lucide-react";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

const SidebarMenu = () => {
  return (
    <div className="fixed top-14 h-full w-[350px] overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px]">
      <MenuItem
        icon={() => (
          <Avatar
            className="w-10 h-10 rounded-full"
            imgSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        )}
        text="Andy Codecamp"
        className="w-10"
      />
      {/* <MenuItem
        icon={Avatar}
        text="Andy Codecamp"
        imgSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="w-10 h-10 rounded-full"
      /> */}
      <MenuItem icon={Users} text="Friends" className="w-10" />
      <MenuItem icon={Handshake} text="Groups" className="w-10" />
      <MenuItem icon={Pin} text="Save" className="w-10" />
      <MenuItem icon={ClockAlert} text="Memories" className="w-10" />
      <MenuItem icon={TvMinimalPlay} text="Videos" className="w-10" />
      <MenuItem icon={Store} text="Marketplace" className="w-10" />
      <MenuItem icon={CircleChevronDown} text="More.." className="w-10" />
    </div>
  );
};

export default SidebarMenu;
