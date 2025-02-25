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
    setStep(1);
    setOpen(!open);
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
          className="h-auto object-fill hidden md:block"
        />
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/3e3b/549c/97f56a8351d296fad111e8e88ccd5d8b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVTLcnBvLP8ikEd-qJG-AqI3HgDfpg3efAr~7MRdmLe1efiTvp4VORQdiSnN9VuAMOEHFK778sz0y281tVrXALgP6ib0Z3wcT4SInkrTAIQj6IY9OGpcNzQfm3fH8ERcvdQqPw9kHJ1dJ7dcq0HcbIeZOimVA9n1qhEEmsXDohBqCmNCiyxCzY6T5rLrsw6BhZSOxQPPW7~DI7uV1knve~AV~y9B-JK6Q40QAv6e5yzxM8CgL28yuqZujB9dJnuqw1-gF6VQNLbGWJnBats~cypis-EDSFAxo1CFDkv7sSRr9lNVD3uC2QAoDyGZCTEbFS3hfLwQje~tthq8NNJWPQ__"
          }
          width={1915}
          height={410.49}
          className="h-auto object-fill block md:hidden"
        />

        <Image
          src={"/workshop-card/page-tear.svg"}
          width={1915}
          height={410.49}
          className="absolute md:-bottom-1/4 -bottom-1"
        />

        <div className="flex justify-center items-center absolute top-[200px] lg:top-[291px] z-20 w-full pb-20">
          <div className="space-y-[40px]">
            {workshopCardData.map((data, index) => {
              return (
                <Card
                  data={data}
                  handleOpen={() => setOpen(true)}
                  key={index}
                />
              );
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
