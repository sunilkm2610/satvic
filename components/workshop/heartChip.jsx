import Image from "next/image";
import React from "react";

const HeartChip = ({ text }) => {
  return (
    <div className="flex gap-[10px] rounded-[12px] px-[8px] py-[6px] bg-[#337AB71A]">
      <Image src={"/icons/heart.svg"} alt="icons" height={18} width={18} />
      <p className="font-bold text-[14px] leading-[22.5px] text-primary">
        {text}
      </p>
    </div>
  );
};

export default HeartChip;
