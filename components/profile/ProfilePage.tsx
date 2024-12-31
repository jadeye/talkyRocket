import * as React from "react";
import { ProfileImage } from "./ProfileImage";
import { InputField } from "./InputField";
import { StatusIndicator } from "./StatusIndicator";

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-5 pt-2 pb-24 mx-auto w-full max-w-[480px]">
      <div className="flex gap-5 justify-between items-start self-stretch text-base font-bold whitespace-nowrap">
        <div className="flex flex-col mt-1 text-blue-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/d617f0e204bf2a2e5ea2c64dd16cfe358bbe400c77241e41598bc6e6d31bd90f?apiKey=746df7e0640049108198b4f4aa316a35&"
            alt=""
            className="object-contain aspect-[2.57] rounded-[32px] w-[54px]"
          />
          <button className="flex gap-1.5 mt-8 items-center" tabIndex={0}>
            <div className="flex shrink-0 bg-sky-100 rounded-full h-[30px] w-[30px]" />
            <div className="my-auto">Back</div>
          </button>
        </div>
        <div className="flex flex-col text-center text-slate-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/eba6de352b84e9406ddbf755d4595aee4f98b0f48314f713818c526de21788aa?apiKey=746df7e0640049108198b4f4aa316a35&"
            alt=""
            className="object-contain self-end rounded-none aspect-[3.14] w-[66px]"
          />
          <div className="self-start mt-10">Profile</div>
        </div>
      </div>

      <ProfileImage
        src="https://cdn.builder.io/api/v1/image/assets/746df7e0640049108198b4f4aa316a35/ed1af314ebd19a4b3098b7a3b7bbe31f3237c53fd52d0569d4dc6061ba5e284d?apiKey=746df7e0640049108198b4f4aa316a35&"
        alt="Profile picture"
      />

      <InputField value="Suzan Winterson" className="mt-12" />

      <InputField value="Today is a better day" />

      <StatusIndicator status="available" label="Available" />

      <button className="px-16 py-4 mt-24 w-full text-lg font-medium text-center text-white whitespace-nowrap bg-blue-500 rounded-lg max-w-[319px]">
        Complete
      </button>
    </div>
  );
};
