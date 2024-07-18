"use client";
import React, { useState } from "react";

const TextField = ({ type, placeholder, value }) => {
  const [isFocused, setIsFocused] = useState(value ? true : false);
  const [inputValue, setInputValue] = useState(value ? value : "");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    // <div>
    //   {" "}
    //   <div className="shadow-secondary h-[65px] rounded-[12px] px-[24px] overflow-hidden">
    //     <p className="text-[14px] font-normal text-[#818184]"> Name</p>
    //     <input
    //       type="text"
    //       className="border-none focus:outline-none w-full text-[18px] font-semibold"
    //       // value={"8269989915"}
    //       //   defaultValue={8269989915}
    //       placeholder="Name"
    //     />
    //   </div>
    // </div>
    <div className="relative w-full">
      <div className="shadow-secondary h-[65px] rounded-[12px] px-[24px] overflow-hidden">
        <input
          type={type}
          className={`border-none focus:outline-none w-full text-[18px] font-semibold h-full ${
            isFocused || inputValue ? "mt-2" : "mt-0"
          }`}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={!isFocused && placeholder}
          defaultValue={value}
        />

        {isFocused && (
          <label
            className={`absolute left-[24px] transition-all duration-200 ease-in-out text-[14px] font-normal text-[#818184] ${
              isFocused || inputValue
                ? "top-1 text-[12px]"
                : "top-1/2 transform -translate-y-1/2"
            }`}
          >
            {placeholder}
          </label>
        )}
      </div>
    </div>
  );
};

export default TextField;
