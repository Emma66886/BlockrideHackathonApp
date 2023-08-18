import React from "react";

function SectionOne() {
  return (
    <>
      <div className="overall flex justify-center m-5">
        <div
          className="box flex flex-col lg:flex-row p-8 items-start  lg:justify-between lg:items-center 
      w-11/12 h-auto relative bg-gradient-to-l from-red-600 to-black rounded-xl border-2 border-stone-800"
        >
          <div className="left lxg:w-2/4">
            <div className="live w-fit h-5 lg:h-14 flex items-center mb-8 lg:border border-stone-800 rounded-3xl 
            lg:bg-neutral-900 lg:bg-opacity-40 p-4
             overflow-clip
            ">
              <div className="relative w-auto h-auto flex-col justify-start items-start inline-flex mr-14 ">
                <div className="lg:hidden w-4 h-4 bg-amber-500 rounded-full p-3" />
                <div className="hidden lg:block w-[20px] h-[20px] left-0 top-0  bg-gradient-to-b from-amber-500 to-red-600 rounded-full shadow"></div>
                <div className="hidden absolute lg:block w-[70px] h-[70px] left-0 top-0  bg-amber-500 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className=" text-white text-xl font-semibold leading-tight">
                LIVE - ENDS IN 30 DAYS
              </div>
            </div>

            <h2 className="text-[24px] lg:text-4xl mb-5">Fractional Offering</h2>
            <p className="text-[14px] lg:text-[16px] lg:w-[652px] text-gray-400 font-normal leading-none mb-6">
              A bus hire purchase agreement designed for individuals seeking a
              steady return on their investment.
            </p>
          </div>

          <div className="right ">
            <div className="w-auto h-auto px-4 py-2 bg-neutral-900 bg-opacity-40 rounded-xl border border-stone-800 backdrop-blur-2xl justify-center items-center gap-2 inline-flex">
              <div className="text-white text-[14px] font-normal ">
                RAISING :
              </div>
              <div className="text-white text-[20px] font-semibold ">
                $150,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
