import Image from "next/image";
import React from "react";

const FeatueCard = ({ iconPath, title, description }) => {
  return (
    // border: 1px solid var(--Border, #E4E4E4)
    <div className="flex border-[1px] w-fit shadow-secondary border-[#E4E4E4] items-center px-[16px] py-[20px] space-x-[14px] rounded-[12px]">
      {iconPath && <Image src={iconPath} height={34} width={34} />}
      <div>
        <p className="font-bold text-[14px] leading-[19.1px] text-[#363636]">
          {title}
        </p>
        <p className="font-bold text-[12px] leading-[16.37px] text-[#818184]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatueCard;
