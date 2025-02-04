import React from "react";
import bgImg from '@/assets/images/360_F_255814073_eVeqoLhJQ31uBZ3fcgaaRcYgEtYDkYkF.jpg'
import { Input } from "@/components/ui/input"
import Menubar from "./Menubar";
import OptionInput from "./OptionInput";
export default function QuestionInput(){
    return(
        <div className={`order-1 lg:order-2 w-full flex flex-col justify-between bg-cover bg-center min-h-[75vh] lg:min-h-screen px-4 py-4 pb-10`}
        style={{ backgroundImage: `url(${bgImg.src || bgImg})`,}}
        >
            <div className="flex gap-4">
            <Input className="bg-white text-center lg:text-3xl lg:placeholder:text-4xl lg:min-h-16" type="text" placeholder="Start typing your question"/>
           <Menubar/>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <OptionInput placeholder="Start typing your question" type="triangle"/>
                <OptionInput placeholder="Start typing your question" type="45DegRectangle"/>
                <OptionInput placeholder="Start typing your question" type="rectangle"/>
                <OptionInput placeholder="Start typing your question" type="circle"/>
            </div>
        </div>
    )
}