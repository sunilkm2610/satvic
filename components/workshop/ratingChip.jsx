import Image from "next/image";
import React from "react";

const RatingChip = ({ rating }) => {
  return (
    <div className="bg-[#53C267] w-fit flex rounded-[6px] px-[4px] py-[2px] items-center space-x-[6px]">
      <p className="text-[#FFFFFF] leading-[19.1px] text-[14px] font-medium">
        {rating}
      </p>
      <Image src={"/icons/star.svg"} alt="icons" height={11.24} width={11.67} />
    </div>
  );
};

export default RatingChip;
