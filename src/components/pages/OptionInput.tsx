import React, { MouseEventHandler } from 'react'
import { Textarea } from '../ui/textarea'
import { Check } from 'lucide-react'

type OptionInputProps= {
    placeholder: string,
    type: "triangle" | "rectangle" | "circle" | "45DegRectangle",
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    name?: string
    onclick : (e:MouseEventHandler<HTMLDivElement>,index: number)=>void,
    selectEffect : boolean
}

function OptionInput({ placeholder, type, value, name, onChange,onclick,selectEffect }: OptionInputProps) {
  
  const types = {
    triangle: "w-0 h-0 border-l-[5px] lg:border-l-[10px] border-l-transparent border-r-[5px] lg:border-r-[10px] border-r-transparent border-b-[10px] lg:border-b-[20px] border-b-white absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] ",
    rectangle: "w-[10px] lg:w-5 h-[10px] lg:h-5 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] bg-white border border-gray-300 shadow-lg",
    circle: "w-[10px] lg:w-5 h-[10px] lg:h-5 bg-white absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] rounded-[50%]",
    rotateRectangle: "w-[10px] lg:w-5 h-[10px] lg:h-5 absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] rotate-[45deg] bg-white border border-gray-300 shadow-lg"
  }

  return (
    <div className="relative">
      <div onClick={onclick} className={`w-6 lg:w-10 h-6 lg:h-10 ${selectEffect ? "bg-white " : "bg-transparent"} absolute z-20 right-1 top-1 rounded-[50%] border-2 border-white ${value.length>0 && "cursor-pointer"}`}>
        <div className={`w-full h-full rounded-[50%] absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center z-50  ${selectEffect ? "opacity-100" :"opacity-0 hover:opacity-100"}`}>
          <Check className={`${selectEffect ? "text-blue-500 opacity-100" : "text-white"}`} /> 
        </div>
      </div>
      <Textarea
        className={`${
          value.length > 0 && type === "triangle" ? "bg-red-600" 
          : value.length > 0 && type === "rectangle" ? "bg-green-600" 
          : value.length > 0 && type === "circle" ? "bg-yellow-600" 
          : value.length > 0 && type === "45DegRectangle" ? "bg-blue-600" 
          : "bg-white"
        } ${value.length > 0 ? "text-white" : "text-black"} pl-10 text-xs lg:px-20 min-h-16 lg:min-h-24 lg:text-xl lg:placeholder:text-2xl transition-[100] outline-none border-none ease-in-out overflow-hidden resize-none pt-8`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        rows={2}
        
      />
      <div className={`absolute min-w-6 min-h-8 lg:min-w-[56px] lg:min-h-[62px] max-w-[56px] max-h-[62px] top-1/2 -translate-y-[50%] left-2 px-2 py-4 ${
        type === "triangle" ? "bg-red-600" 
        : type === "rectangle" ? "bg-green-600" 
        : type === "circle" ? "bg-yellow-600" 
        : "bg-blue-600"
      } rounded-md lg:rounded-lg`}>
        <div className={type === "triangle" ? types.triangle 
          : type === "rectangle" ? types.rectangle 
          : type === "circle" ? types.circle 
          : types.rotateRectangle}>
        </div>
      </div>
    </div>
  )
}

export default OptionInput;
