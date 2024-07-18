"use client";
import JoinWorkshop from "@/components/joinWorkshopDialog/joinWorkshop";
import Navbar from "@/components/navbar/navbar";
import Card from "@/components/workshop/card";
import { workshopCardData } from "@/components/workshop/workshopCard.data";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const handleOpen = () => {
    setOpen(!open);
    setStep(1);
  };
  return (
    <main className="">
      <Navbar />
      <div className="relative">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/e9b9/9257/86bcad15152462ba9235c398a8a4f93d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eW~4LY5~t7zvLR6zDvYpA1S~2XPwiG-NsEEDttjNB1e1qseBqTO831-pL0VjHE0DrPTt7W6hOUDhTRFVi5RuJReARoYULdOkL9CSNsD1VpOIKCRPK-xFMfacgTLoPKW1hjS8lBoiK0HEJQ49mSePO3yjLTfm8MysFUfQjaMLNCfOXjXe9dftdaXz9IpCvt8VpdlepNth-UlMwx1O9BOD~n-~NC8kVkJlXlJRAVFgNwc-m2yk~jJ8ExVtJndMpCwKX9rkProWedc63qZKu~wwcTaM-Je6mgdykflpyL0TzKlUo~TtvsOkGV3ojB9u-CgquvHmOwkCfFxT6nrWf4hjjQ__"
          }
          width={1915}
          height={410.49}
          className="h-auto object-fill"
        />
        <Image
          src={"/workshop-card/page-tear.svg"}
          width={1915}
          height={410.49}
          className="absolute lg:top-[257px] md:top-[100px] top-[150px]"
        />

        <div className="flex justify-center items-center absolute top-[291px] z-20 w-full">
          <div className="space-y-[40px]">
            {workshopCardData.map((data) => {
              return <Card data={data} handleOpen={handleOpen} />;
            })}
          </div>
        </div>
        <JoinWorkshop
          open={open}
          handleOpen={handleOpen}
          setOpen={setOpen}
          step={step}
          setStep={setStep}
        />
      </div>
    </main>
  );
}
