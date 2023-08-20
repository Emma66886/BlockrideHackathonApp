import All from "./All";
import Latest from "./Latest";
import Soldout from "./Soldout";
import { useState } from "react";

function SectionTwo() {


const show = ["flex"]
const hide = ["hidden"]


const [state, setState] = useState(show)
const [state2, setState2] = useState(hide)
const [state3, setState3] = useState(hide)


const function1 = () => {
  setState(show)
  setState2(hide)
  setState3(hide)
}

const function2 = () => {
  setState(hide)
  setState2(show)
  setState3(hide)
}

const function3 = () => {
  setState(hide)
  setState2(hide)
  setState3(show)
}

  
const Tab1 = () => (
  <div className={`${state} flex-wrap justify-around`}>
<All/>  </div>
  
)
const Tab2 = () => (
  <div className={`${state2} flex flex-wrap justify-around`}>
<Latest/> </div>
 
)
const Tab3 = () => (
  <div className={`${state3} flex flex-wrap justify-around`}>
<Soldout/> </div>
)


  return (
    <>


    <div className="flex flex-col  m-11">
      <div className=" lg:mx-20   flex items-center">
      <button onClick={()=>{function1()}} className="text-[14px] lg:text-[16px] mr-4 lg:mx-10 text-gray-400 font-normal leading-none mb-6">
          All
        </button>
      <button onClick={()=>{function2()}} className="text-[14px] lg:text-[16px] mr-4 lg:mx-20 text-gray-400 font-normal leading-none mb-6">
          Latest
        </button>
      <button onClick={()=>{function3()}} className="text-[14px] lg:text-[16px] mr-4 lg:mx-20 text-gray-400 font-normal leading-none mb-6">
          Sold out
        </button>
      </div>
      

     <Tab1/>
     <Tab2/>
     <Tab3/>

     

      
    </div>

    </>
  );
}

export default SectionTwo;
