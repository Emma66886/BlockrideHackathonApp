import Blockride from "../../../../assets/images/Blockride.png";
import Arrow from "../../../../assets/images/arrow.svg";
function LatestCard() {
  return (
    <>
      <div
        className="ProductCard border border-[#29231B] p-8 rounded-2xl my-7
    lg: w-[350px]
    "
      >
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
          <div className="rightactive w-16 h-6 bg-gradient-to-r from-amber-500 to-red-600 rounded-sm justify-center items-center inline-flex">
            <div className="text-white text-xs font-medium">Active</div>
          </div>
        </div>

        <div className="Market">
          <div className="w-full h-auto flex-col justify-start items-start inline-flex">
            <div className="text-white text-[27px] font-normal leading-loose">
              Yutong E9
            </div>
            <div className="text-[#F1F1F1] w-auto justify-between items-center gap-2 inline-flex mb-5">
              <div className="  text-[12px] font-normal leading-7">
                22 seats
              </div>
              <div className="w-1 h-1 bg-zinc-100 rounded-full" />
              <div className=" text-[12px] font-normal leading-7">E-Coach</div>
              <div className="w-1 h-1 bg-zinc-100 rounded-full" />
              <div className=" text-[12px] font-normal leading-7">
                8940*2420*3295
              </div>
            </div>
            <div className="details  w-full mb-20">
              {marketDetails({ title: "Target", value: "70%" })}
              {marketDetails({ title: "Duration", value: "3yrs" })}
              {marketDetails({ title: "Tokens Remaining", value: "1000" })}
            </div>
            <div className="flex justify-between mb-2 w-full">
              <p className="ex">EXPAND</p>
              <img src={Arrow} alt="" />
            </div>
            <hr className="bg-white text-white border-1 border-white w-full" />
            <div className="flex justify-between mt-2 mb-3 w-full">
              <p className="text-[#F1F1F1]">50% per token</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  const marketDetails = ({title, value}: any) => (
    <div className="Target  flex justify-between mb-3">
                  <p className="text-[#999]">{title}</p>
                  <p className="text-[#F1F1F1]">{value}</p>
                </div>
  );
  
export default LatestCard