import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import RatingChip from "./ratingChip";
import FeatueCard from "./featueCard";
import HeartChip from "./heartChip";
import LabelChip from "./labelChip";
import { Separator } from "../ui/separator";

const Card = ({ data, handleOpen }) => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="max-w-[1199px] shadow-mainCard flex py-[40px] px-[24px] rounded-[12px] gap-[30px] bg-white flex-col lg:flex-row">
          <div className="h-[365px] min-w-[536px]  rounded-[12px] overflow-hidden relative">
            <Image
              src={data.content[0].url}
              alt={data.content[0].type}
              width={600}
              height={390}
              className={`h-[365px] lg:w-[536px] w-full absolute ${
                data.title === "7-Day Satvic Food Challenge"
                  ? "scale-105"
                  : "scale-100"
              }`}
            />
            <div className="absolute top-[16px] left-[16px] z-10">
              <LabelChip />
            </div>
            <Image
              src={"/icons/highlightleftarrow.svg"}
              alt={"icon"}
              width={46}
              height={46}
              className={`absolute left-[16px] top-1/2 -translate-y-1/2`}
            />
            <Image
              src={"/icons/highlightleftarrow.svg"}
              alt={"icon"}
              width={46}
              height={46}
              className={`absolute right-[16px] rotate-180 top-1/2 -translate-y-1/2`}
            />
            <Image
              src={"/icons/dots.svg"}
              alt={"icon"}
              width={55}
              height={19}
              className={`absolute right-1/2 translate-x-1/2 rotate-180 bottom-[16.5px]`}
            />
          </div>
          <div className="relative">
            <div className="mb-[4px]">
              <p className="font-semibold text-[24px]">{data.title}</p>
            </div>

            <div className="mb-[16px] flex space-x-[6px] items-center">
              <RatingChip rating={data.review.rating} />
              <p className="font-bold text-[14px] leading-[19.1px] text-[#818184]">
                {data.review.count} reviews
              </p>
            </div>
            <div className="mb-[18px]">
              <p className="font-medium text-[16px] leading-[24px] text-[#363636]">
                {data.description}
              </p>
            </div>

            <div className="mb-[18px] flex space-x-[20px]">
              {data.fetures.map((feature, index) => {
                return (
                  <FeatueCard
                    iconPath={feature.iconPath}
                    title={feature.title}
                    description={feature.description}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="mb-[8px]">
              <p className="font-bold text-[20px] leading-[27.28px] text-[#363636]">
                ₹ {data.price}
              </p>
            </div>

            <div className="mb-[12px] space-x-[24px]">
              <Button
                variant="default"
                className="rounded-[12px] px-[40px] py-[10px] h-[50px]"
                onClick={handleOpen}
              >
                <p className="font-bold text-[18px] leading-[24.55px] text-[#FFFFFF]">
                  Join the challenge
                </p>
              </Button>
              <Button
                variant="outline"
                className="rounded-[12px] px-[40px] py-[10px] text-primary border-primary border-[2px] h-[50px]"
              >
                <p className="font-bold text-[18px] leading-[24.55px] text-primary">
                  View details
                </p>
              </Button>
            </div>
            <div>
              <div className="text-primary font-semibold leading-[21.82px] text-[16px] flex items-center space-x-[8px]">
                <span>
                  <Image src={"/icons/usergroup.svg"} height={22} width={22} />
                </span>
                <p>{data.joined} have already joined</p>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <HeartChip text={data.heartText} />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-[328px] shadow-mainCard rounded-[12px] gap-[30px] bg-white">
          <div className="rounded-t-[12px] overflow-hidden relative">
            <Image
              src={data.content[0].url}
              alt={data.content[0].type}
              width={648}
              height={390}
              className={`h-[183px] w-[358px] ${
                data.title === "7-Day Satvic Food Challenge"
                  ? "scale-105"
                  : "scale-100"
              }`}
            />
            <div className="absolute top-[16px] left-[16px] z-10">
              <LabelChip />
            </div>
            <Image
              src={"/icons/leftarrow.svg"}
              alt={"icon"}
              width={24}
              height={24}
              className={`absolute left-[8px] top-1/2 -translate-y-1/2`}
            />
            <Image
              src={"/icons/leftarrow.svg"}
              alt={"icon"}
              width={24}
              height={24}
              className={`absolute right-[8px] rotate-180 top-1/2 -translate-y-1/2`}
            />
            <Image
              src={"/icons/dots.svg"}
              alt={"icon"}
              width={55}
              height={19}
              className={`absolute right-1/2 translate-x-1/2 rotate-180 bottom-[13.5px]`}
            />
          </div>
          <div className="relative p-[12px]">
            <div className="mb-[4px]">
              <p className="font-semibold text-[24px]">{data.title}</p>
            </div>

            <div className="mb-[12px] flex space-x-[6px] items-center">
              <RatingChip rating={data.review.rating} />
              <p className="font-semibold text-[12px] leading-[19.1px] text-[#818184]">
                {data.review.count} reviews
              </p>
            </div>

            <div className="mb-[12px] flex space-x-[20px]">
              <div className="flex border-[1px] w-fit shadow-secondary border-[#E4E4E4] items-center px-[12px] py-[10.5px] space-x-[11px] rounded-[8px]">
                <div className="flex items-center space-x-[8px]">
                  <Image
                    src={data.fetures[0].iconPath}
                    height={18}
                    width={18}
                  />
                  <p className="font-medium text-[14px] leading-[19.1px] text-[#363636]">
                    {data.fetures[0].title}
                  </p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex items-center space-x-[8px]">
                  <Image
                    src={data.fetures[1].iconPath}
                    height={18}
                    width={18}
                  />
                  <p className="font-medium text-[14px] leading-[19.1px] text-[#363636]">
                    {data.fetures[1].title}
                  </p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex items-center space-x-[8px]">
                  <Image
                    src={data.fetures[2].iconPath}
                    height={18}
                    width={18}
                  />
                  <p className="font-medium text-[14px] leading-[19.1px] text-[#363636]">
                    {data.fetures[2].title}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-[0px]">
              <p className="font-medium text-[14px] leading-[24px] text-[#818184]">
                {data.description}
              </p>
            </div>
          </div>
          <div className="rounded-b-[12px] p-[16px] flex items-center justify-between shadow-secondary">
            <p className="font-bold text-[14px] leading-[19.1px] text-primary cursor-pointer">
              View details
            </p>
            <Button
              variant="default"
              className="rounded-[12px] px-[20px] py-[10px] h-[40px] space-x-[4.5px]"
              onClick={handleOpen}
            >
              <p className="font-semibold text-[14px] leading-[19.1px] text-[#FFFFFF]">
                Join challenge
              </p>
              <Separator orientation={"vertical"} />
              <p className="font-semibold text-[14px] leading-[19.1px] text-[#FFFFFF]">
                ₹ {data.price}
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
