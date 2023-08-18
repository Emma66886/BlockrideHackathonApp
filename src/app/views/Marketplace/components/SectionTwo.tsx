import React from "react";
import Blockride from "../../../assets/images/Blockride.png";

function SectionTwo() {

  

  return (
    <div className="flex flex-col  m-11">
      <div className="border   flex">
        <p className="text-[14px] lg:text-[16px] lg:w-[652px] text-gray-400 font-normal leading-none mb-6">
          All
        </p>
      </div>

      <div className="container border rounded">
        <div className="topsection flex justify-between">
          <div className="leftinfo flex">
            <div className="assetlogo ">
              <img src={Blockride} alt="" className="w-14" />
            </div>
            <div className="ratingbox ml-8">
              <p className="title text-white text-[16px] font-medium leading-tight">
                Blockride
              </p>
              <p className="overallrating w-auto text-neutral-500 text-[10px] font-normal leading-tight">
                Overall Rating
              </p>
              <div className="rating">...</div>
            </div>
          </div>

          <div className="rightactive w-14 h-6 bg-gradient-to-r from-amber-500 to-red-600 rounded-sm justify-center items-center inline-flex">
            <div className="text-white text-xs font-medium">Active</div>
          </div>
        </div>

        <div className="section2">
          <div className="w-auto h-auto flex-col justify-start items-start inline-flex">
           
              <div className="text-white text-[27px] font-normal leading-loose">
                Yutong E9
              </div>
            <div className="w-auto justify-between items-center gap-2 inline-flex">
              <div className=" text-zinc-100 text-[12px] font-normal leading-7">
                22 seats
              </div>
              <div className="w-1 h-1 bg-zinc-100 rounded-full" />
              <div className="text-zinc-100 text-[12px] font-normal leading-7">
                E-Coach
              </div>
              <div className="w-1 h-1 bg-zinc-100 rounded-full" />
              <div className="text-zinc-100 text-[12px] font-normal leading-7">
                8940*2420*3295
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default SectionTwo;
