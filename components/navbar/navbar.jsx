import Image from "next/image";
import React from "react";

const links = [
  {
    text: "Home",
    nestedLinks: [],
  },
  {
    text: "About Us",
    nestedLinks: [],
  },
  {
    text: "Workshops",
    nestedLinks: [],
  },
  {
    text: "Food Books",
    nestedLinks: [1],
  },
  {
    text: "Products",
    nestedLinks: [1],
  },
  {
    text: "Videos",
    nestedLinks: [],
  },
  {
    text: "Healing Stories",
    nestedLinks: [1],
  },
  {
    text: "Contact Us",
    nestedLinks: [],
  },
  {
    text: "Workshop Login",
    nestedLinks: [],
  },
];

const LinkButton = ({ linkText, nested }) => {
  return (
    <div className="py-[15px] px-[11.25px] flex space-x-[22.5px]">
      <p className="font-semibold text-[14px] leading-[21px] tracking-[1px] uppercase">
        {linkText}
      </p>
      {nested.length ? (
        <Image src={"/icons/downarrow.svg"} height={24} width={24} />
      ) : (
        <></>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="px-[16px] py-[12px] md:px-[34px] bg-white md:py-[25.5px] h-fit">
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/c157/d77d/660c4155d8c3941786dd9a30d002a4ba?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dmC4sRH1kMXXO3NhzSlDXrQSA11ej8OYEzqJoU~bt-KXXqB-xCzjy-9ASOAkcoQW6ZkUs4rIDSmLdmQNFAALzjC9cBmAPc3CAb0WqACYWI9ciqmZox~NQxKJlXPY4P-9g7VkN0pUDXFGBdXLF~jnTs97ygAnVjWnWzazgTiAz1uPPdTGS2TdzX7L1qdo2r9ZvjJt-eHRgWNyDa5fFRc5eZhPyxr0BKJ44LfjOIjJvokFjJGcPDHA4r92qq6JHZ5KcpMuK1ie-H2kgpKPGn~ck~4PfGr7stjMVqrlKxTRGPGtY7Liy4xEKzjwP5Y0dUpK9X4D7v8QGFq6XwGgq83ArA__"
            }
            width={190}
            height={13.3}
          />
        </div>
        <div>
          <div className="hidden 2xl:flex space-x-[24px]">
            {links.map((link, index) => {
              return (
                <LinkButton
                  linkText={link.text}
                  nested={link.nestedLinks}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex 2xl:hidden space-x-[10px]">
          <Image src={"/icons/hamburger.svg"} width={18} height={18} />
        </div>
        <div className="hidden 2xl:flex space-x-[10px]">
          <Image src={"/icons/search.svg"} width={18} height={18} />
          <Image src={"/icons/earth.svg"} width={18} height={18} />
          <Image src={"/icons/user.svg"} width={18} height={18} />
          <Image src={"/icons/cart.svg"} width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
