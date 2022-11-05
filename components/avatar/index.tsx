import Image from "next/image";
import React from "react";
import { avatar } from "../../public/image";

const Avatar = ({ src }: any) => {
  const getAvatar = () => {
    if (src && src !== "undefined") {
      return src;
    }
    return avatar
  };

  return (
    <Image
    src={getAvatar()}
    alt='avatar'
    className={`avatar`}
    />
  )
};

export default Avatar;
