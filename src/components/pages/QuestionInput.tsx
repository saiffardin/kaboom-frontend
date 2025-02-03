import React from "react";
import bgImg from '@/assets/images/360_F_255814073_eVeqoLhJQ31uBZ3fcgaaRcYgEtYDkYkF.jpg'
import { Input } from "@/components/ui/input"
import { EllipsisVertical } from "lucide-react";
export default function QuestionInput(){
    return(
        <div className={`order-1 lg:order-2 w-full flex flex-col justify-between bg-cover bg-center min-h-[80vh] md:min-h-screen px-4 py-4`}
        style={{ backgroundImage: `url(${bgImg.src || bgImg})`,}}
        >
            <div className="flex gap-4">
            <Input className="bg-white text-center lg:text-3xl placeholder:text-4xl lg:min-h-16" type="text" placeholder="Start typing your question"/>
            <span className="md:hidden  text-black bg-white min-h-8 min-w-8 rounded-[50%]  flex  gap-0 justify-center items-center">
            <EllipsisVertical/>
            </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <Input className="bg-white lg:min-h-20 lg:text-3xl placeholder:text-3xl text-center" type="text" placeholder="Start typing your question"/>  
                <Input className="bg-white lg:min-h-20 lg:text-3xl placeholder:text-3xl text-center" type="text" placeholder="Start typing your question"/>
                <Input className="bg-white lg:min-h-20 lg:text-3xl placeholder:text-3xl text-center" type="text" placeholder="Start typing your question"/>
                <Input className="bg-white lg:min-h-20 lg:text-3xl placeholder:text-3xl text-center" type="text" placeholder="Start typing your question"/>    
            </div>
        </div>
    )
}