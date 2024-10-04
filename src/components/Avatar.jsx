import { ChevronDown } from "lucide-react";
import defaultAvatar from "../assets/default-avatar.png";

const Avatar = (props) => {
  const { imgSrc, menu, ...restProps } = props;

  return (
    <div className="avatar items-center cursor-pointer">
      <div {...restProps}>
        <img src={imgSrc ?? defaultAvatar} />
        {/* <img src={imgSrc ? imgSrc : defaultAvatar} /> */}
      </div>

      {menu && <ChevronDown className="absolute -bottom-3.5 -right-1 w-4" />}
    </div>
  );
};

export default Avatar;
