
import React from 'react'
import { Input } from '../ui/input'

type OptionInputProps= {
    placeholder:string,
    type : "triangle" | "rectangle" | "circle" | "45DegRectangle"
}
function OptionInput({placeholder,type}:OptionInputProps) {
  const types = {
    triangle : "w-0 h-0 border-l-[5px] lg:border-l-[10px] border-l-transparent border-r-[5px] lg:border-r-[10px] border-r-transparent border-b-[10px] lg:border-b-[20px] border-b-white absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] ",
    rectangle : "w-[10px] lg:w-5 h-[10px] lg:h-5 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]  bg-white border border-gray-300 shadow-lg",
    circle : "w-[10px] lg:w-5 h-[10px] lg:h-5 bg-white absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] rounded-[50%]",
    rotateRectangle : "w-[10px] lg:w-5 h-[10px] lg:h-5 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] rotate-[45deg] bg-white border border-gray-300 shadow-lg"
  }
  return (
    <span className=" relative ">
                    <Input className="bg-white pl-10 text-base lg:pl-20 min-h-12  lg:min-h-20 lg:text-xl lg:placeholder:text-2xl placeholder:text-center" type="text" placeholder={placeholder}/> 
                   <div className={`absolute min-w-6 min-h-8 lg:min-w-[56px] lg:min-h-[62px] max-w-[56px] max-h-[62px] top-1/2 -translate-y-[50%] left-2 px-2 py-4 ${type == "triangle" ? "bg-red-600" : type=="rectangle" ? "bg-green-600" : type == "circle" ? "bg-yellow-600" : "bg-blue-600"} rounded-md lg:rounded-lg`}>
                        <div className={type=="triangle"?types.triangle : type == "rectangle"? types.rectangle :type=="circle" ? types.circle :types.rotateRectangle }></div>
                   </div>
    </span> 
  )
}

export default OptionInput