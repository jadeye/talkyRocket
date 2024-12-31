import * as React from "react";
import { ProfileImageProps } from "./types";

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  className,
}) => (
  <div className="flex relative flex-col items-end px-10 pt-36 mt-11 max-w-full rounded-full aspect-square w-[190px]">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex relative shrink-0 bg-blue-500 rounded-full h-[50px] w-[50px]" />
  </div>
);
