"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TextField from "../textField/textField";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { X } from "lucide-react";

const chipdata = [
  "Thyroid imbalance",
  "Excess weight",
  "High BP",
  "PCOD",
  "Diabetes type 2",
];

const Chip = ({ description }) => {
  return (
    <div className="flex border-[1px] w-max shadow-secondary border-[#E4E4E4] items-center px-[12px] py-[8px] space-x-[14px] rounded-[12px]">
      <p className="font-semibold text-[12px] leading-[16.37px] text-[#818184]">
        {description}
      </p>
    </div>
  );
};

const JoinWorkshop = ({ open, setOpen, handleOpen, step, setStep }) => {
  const isDesktop = useMediaQuery("(max-width: 768px)");
  if (!isDesktop) {
    return (
      <Dialog open={open} className="rounded-[24px]" onOpenChange={setOpen}>
        <DialogContent className="min-w-[600px] h-[905px] px-[30px] rounded-[24px] pt-[30px] bg-[#FFFFFF]">
          <div className="flex flex-col justify-between">
            <div className="">
              <div className="flex space-x-[16px] h-[20px] items-center">
                <div
                  className={`h-[6px] bg-primary ${
                    step == 1 ? "opacity - 100" : "opacity-10"
                  } rounded-[6px] w-[244px]`}
                ></div>
                <div
                  className={`h-[6px] bg-primary ${
                    step == 2 ? "opacity - 100" : "opacity-10"
                  } rounded-[6px] w-[244px]`}
                ></div>
              </div>
              <div className="mt-[16px]">
                <p className="font-semibold text-[16px] leading-[21.82px]">
                  Heal Yourself Challenge
                </p>
                <div className="flex space-x-[12px] mt-[8px]">
                  <div className="flex space-x-[8px]">
                    <Image
                      src={"/icons/calender.svg"}
                      width={18}
                      height={18}
                      className="text-[#818184]"
                    />
                    <p className="font-medium text-[14px] text-[#818184]">
                      6th May
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
                    <Image
                      src={"/icons/timer.svg"}
                      width={18}
                      height={18}
                      className="text-[#818184]"
                    />
                    <p className="font-medium text-[14px] text-[#818184]">
                      7 Days
                    </p>
                  </div>
                  <div className="flex space-x-[8px]">
                    <Image
                      src={"/icons/language.svg"}
                      width={18}
                      height={18}
                      className="text-[#818184]"
                    />
                    <p className="font-medium text-[14px] text-[#818184]">
                      English
                    </p>
                  </div>
                </div>
                <div className="border-[1px] border-[#E4E4E4] shadow-secondary mb-[16px] mt-[16px] rounded-[8px]">
                  <p className="font-semibold text-[14px] text-[#363636] px-[12px] py-[6px]">
                    Session timings: 8 - 8:45 am (IST)
                  </p>
                  <div className="flex space-x-[6px] bg-[#337AB71A] px-[12px] py-[6px]">
                    <Image
                      src={"/icons/reacorder.svg"}
                      width={16}
                      height={16}
                      className="text-[#818184]"
                    />
                    <p className="font-medium text-[12px] text-primary">
                      Recording available for 24 hours
                    </p>
                  </div>
                </div>
                <Separator />
              </div>
              {/* ---------------------------------------- */}
              {step == 1 && (
                <div>
                  <p className="font-semibold text-[24px] leading-[36px] my-[12px]">
                    Your mobile number
                  </p>
                  <div className="shadow-secondary h-[65px] rounded-[12px] flex">
                    <Select defaultValue="india" className="">
                      <SelectTrigger className="border-none border-0 h-full w-[130px]">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          <SelectItem value="india">
                            <div className="flex items-center space-x-[6px]">
                              <Image
                                src={"/icons/indianflag.svg"}
                                width={25}
                                height={23}
                              />
                              <p className="font-semibold text-[18px] leading-[24.55px]">
                                +91
                              </p>
                            </div>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Separator
                      orientation="vertical"
                      className="mt-[13px] mb-[13px] h-[39px]"
                    />
                    <input
                      type="number"
                      className="border-none focus:outline-none px-[24px] w-full text-[18px] font-semibold"
                      // value={"8269989915"}
                      defaultValue={8269989915}
                    />
                  </div>
                  <div className="flex my-[12px] space-x-[8px]">
                    <Image
                      src={"/icons/ilogo.svg"}
                      width={18}
                      height={18}
                      className="text-[#818184]"
                    />
                    <p className="font-medium text-[16px] text-[#818184]">
                      You can access the workshop using this number
                    </p>
                  </div>
                </div>
              )}
              {step == 2 && (
                <div className="space-y-[12px]">
                  <div className="space-y-[24px] mt-[12px]">
                    <TextField
                      type="text"
                      placeholder="Name"
                      value="Ravi Kumar"
                    />
                    <TextField
                      type="text"
                      placeholder="Emai ID"
                      value="Ravi@gmail.com"
                    />
                    <TextField type="text" placeholder="Enter your city" />
                  </div>
                  <div className="overflow-hidden space-y-[12px]">
                    <p className="font-semibold text-[16px] leading-[21.82px] mt-[12px]">
                      This workshop can help you heal the following:
                    </p>
                    <div className="flex overflow-x-hidden space-x-[12px]">
                      {chipdata.map((text) => (
                        <Chip description={text} />
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden space-y-[12px]">
                    <p className="font-semibold text-[16px] leading-[21.82px] mt-[12px]">
                      However, it will not be sufficient for the following
                      conditions:
                    </p>
                    <div className="flex overflow-x-hidden space-x-[12px]">
                      {chipdata.map((text) => (
                        <Chip description={text} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="">
              {/* <div className="-mx-[30px] py-[30px] shadow-secondary "></div> */}
              {step == 1 && (
                <Button
                  className="w-full rounded-[16px] h-[45px]"
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              )}
              {step == 2 && (
                <Button
                  className="w-full rounded-[16px] h-[45px]"
                  onClick={() => handleOpen()}
                >
                  Continue to payment
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="rounded-t-[24px]">
        <div className="flex flex-col justify-between">
          <div className="px-[16px]">
            <div className="flex space-x-[16px] h-[20px] items-center">
              <div
                className={`h-[6px] bg-primary ${
                  step == 1 ? "opacity - 100" : "opacity-10"
                } rounded-[6px] w-full`}
              ></div>
              <div
                className={`h-[6px] bg-primary ${
                  step == 2 ? "opacity - 100" : "opacity-10"
                } rounded-[6px] w-full`}
              ></div>
              <X className="h-[20px] w-[50px]" onClick={() => setOpen(false)} />
            </div>
            <div className="mt-[16px]">
              <p className="font-semibold text-[16px] leading-[21.82px]">
                Heal Yourself Challenge
              </p>
              <div className="flex space-x-[12px] mt-[8px]">
                <div className="flex space-x-[8px]">
                  <Image
                    src={"/icons/calender.svg"}
                    width={18}
                    height={18}
                    className="text-[#818184]"
                  />
                  <p className="font-medium text-[14px] text-[#818184]">
                    6th May
                  </p>
                </div>
                <div className="flex space-x-[8px]">
                  <Image
                    src={"/icons/timer.svg"}
                    width={18}
                    height={18}
                    className="text-[#818184]"
                  />
                  <p className="font-medium text-[14px] text-[#818184]">
                    7 Days
                  </p>
                </div>
                <div className="flex space-x-[8px]">
                  <Image
                    src={"/icons/language.svg"}
                    width={18}
                    height={18}
                    className="text-[#818184]"
                  />
                  <p className="font-medium text-[14px] text-[#818184]">
                    English
                  </p>
                </div>
              </div>
              <div className="border-[1px] border-[#E4E4E4] shadow-secondary mb-[16px] mt-[16px] rounded-[8px]">
                <p className="font-semibold text-[14px] text-[#363636] px-[12px] py-[6px]">
                  Session timings: 8 - 8:45 am (IST)
                </p>
                <div className="flex space-x-[6px] bg-[#337AB71A] px-[12px] py-[6px]">
                  <Image
                    src={"/icons/reacorder.svg"}
                    width={16}
                    height={16}
                    className="text-[#818184]"
                  />
                  <p className="font-medium text-[12px] text-primary">
                    Recording available for 24 hours
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            {/* ---------------------------------------- */}
            {step == 1 && (
              <div>
                <p className="font-semibold text-[24px] leading-[36px] my-[12px]">
                  Your mobile number
                </p>
                <div className="shadow-secondary h-[65px] rounded-[12px] flex">
                  <Select defaultValue="india" className="">
                    <SelectTrigger className="border-none border-0 h-full w-[130px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="india">
                          <div className="flex items-center space-x-[6px]">
                            <Image
                              src={"/icons/indianflag.svg"}
                              width={25}
                              height={23}
                            />
                            <p className="font-semibold text-[18px] leading-[24.55px]">
                              +91
                            </p>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Separator
                    orientation="vertical"
                    className="mt-[13px] mb-[13px] h-[39px]"
                  />
                  <input
                    type="number"
                    className="border-none focus:outline-none px-[24px] w-full text-[18px] font-semibold"
                    defaultValue={8269989915}
                  />
                </div>
                <div className="flex my-[12px] space-x-[8px]">
                  <Image
                    src={"/icons/ilogo.svg"}
                    width={18}
                    height={18}
                    className="text-[#818184]"
                  />
                  <p className="font-medium text-[16px] text-[#818184]">
                    You can access the workshop using this number
                  </p>
                </div>
              </div>
            )}
            {step == 2 && (
              <div className="space-y-[12px]">
                <div className="space-y-[24px] mt-[12px]">
                  <TextField
                    type="text"
                    placeholder="Name"
                    value="Ravi Kumar"
                  />
                  <TextField
                    type="text"
                    placeholder="Emai ID"
                    value="Ravi@gmail.com"
                  />
                  <TextField type="text" placeholder="Enter your city" />
                </div>
                <div className="overflow-hidden space-y-[12px]">
                  <p className="font-semibold text-[16px] leading-[21.82px] mt-[12px]">
                    This workshop can help you heal the following:
                  </p>
                  <div className="flex space-x-[12px]">
                    {chipdata.slice(0, 4).map((text) => (
                      <Chip description={text} />
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden space-y-[12px]">
                  <p className="font-semibold text-[16px] leading-[21.82px] mt-[12px]">
                    However, it will not be sufficient for the following
                    conditions:
                  </p>
                  <div className="flex overflow-x-hidden space-x-[12px]">
                    {chipdata.slice(0, 4).map((text) => (
                      <Chip description={text} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-[16px] shadow-secondary mt-[45px]">
            {step == 1 && (
              <Button
                className="w-full rounded-[16px] h-[45px]"
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            )}
            {step == 2 && (
              <Button
                className="w-full rounded-[16px] h-[45px]"
                onClick={() => {
                  setOpen(false);
                  setStep(1);
                }}
              >
                Continue to payment
              </Button>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default JoinWorkshop;
