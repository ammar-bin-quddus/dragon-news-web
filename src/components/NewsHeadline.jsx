import React from "react";
import Marquee from "react-fast-marquee";

const NewsHeadline = () => {
  return (
    <div className="w-11/12 mx-auto p-4 bg-[#F3F3F3]">
      <div className="w-full flex items-center justify-start gap-4">
        <div>
          <p className="px-5 py-2 bg-[#D72050] text-white">Latest</p>
        </div>
        <div>
          <Marquee pauseOnHover={true}>
            <p className="font-semibold text-[#403F3F]">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            natus. ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            doloremque!</p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadline;
