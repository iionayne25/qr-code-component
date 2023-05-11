import React from "react";
import Image from "next/image";
const qrCodeCard = () => {
  return (
    <div
      className="bg-white w-full h-auto mx-6 my-20 pb-8 rounded-2xl flex flex-col items-center
    xl:w-64 xl:h-[500px]"
    >
      <div className=" w-full flex justify-center mt-4 mb-5   ">
        <Image
          src="/image-qr-code.png"
          alt="qr code image"
          width={280}
          height={280}
          className=" rounded-lg "
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 flex-wrap">
        <p className="title">
          Improve your front-end skills by building projects
        </p>
        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level{" "}
        </p>
      </div>
    </div>
  );
};

export default qrCodeCard;
