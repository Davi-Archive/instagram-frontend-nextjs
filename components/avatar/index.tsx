import Image from "next/image";
import React from "react";
import { avatar } from "../../public/image";

const Avatar = ({ src }: any) => {
  const getAvatar = () => {
    if (src && src !== "undefined") {
      console.log(src)
      return src;
    }
    return avatar.src;
  };

  return (
    <img
      src={getAvatar()}
      alt="avatar"
      className={`avatar`}
    />
  );
};

export default Avatar;
