import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import RatingChip from "./ratingChip";
import FeatueCard from "./featueCard";
import HeartChip from "./heartChip";
import LabelChip from "./labelChip";

const Card = ({ data, handleOpen }) => {
  return (
    <div>
      <div className="max-w-[1199px] shadow-mainCard flex py-[40px] px-[24px] rounded-[12px] gap-[30px] bg-white">
        <div className="h-[365px] min-w-[536px] bg-red-300 rounded-[12px] overflow-hidden relative">
          <Image
            src={data.content[0].url}
            alt={data.content[0].type}
            width={648}
            height={390}
            className="object-left-top h-[365px] w-[536px]"
          />
          {/* <video width="536px" height="465px" controls preload="none">
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1357292455482625851/USER/50e4/c68e/-1daa-4c48-b1df-65495bbe705f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4B~MJ7pSZOFWSzUYtL6toz4bh1rQnXS38E-v1hFBlxAQf2jD2~paqRkD5udCxPAdmLpIhrJJ~pVNI7eEV2vTl2sOU11H9vJUtoPXCJFpsnVEjp9XsdQIvTEonltxuc6T5Shk7F~BAR1vRvdYKvAyu0yovKfwHVbhMqhD-r3LE3fRFfI1A6kZv6Sa1EgROugRG~YNI9royUCA5n5mNFTGh25OhbmvHs63NnBLC0L~~FwY5tsFL-poXVj2pqcRDszug7Yw4ImD~rt5tn66IJExsTyqVGa-pwl-DPaWnH5cCgIaCLUlgciFfDtTj4kKSd8lzWw5JzvvPJXfTc6W2tyAQ__"
              type="video/mp4"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video> */}
          <div className="absolute top-[16px] left-[16px] z-10">
            <LabelChip />
          </div>
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
            {data.fetures.map((feature) => {
              return (
                <FeatueCard
                  iconPath={feature.iconPath}
                  title={feature.title}
                  description={feature.description}
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
            <p className="text-primary font-semibold leading-[21.82px] text-[16px] flex items-center space-x-[8px]">
              <span>
                <Image src={"/icons/usergroup.svg"} height={22} width={22} />
              </span>
              <p>{data.joined} have already joined</p>
            </p>
          </div>
          <div className="absolute top-0 right-0">
            <HeartChip text={data.heartText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
