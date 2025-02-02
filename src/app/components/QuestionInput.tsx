import React from "react";
import bgImg from '@/assets/images/360_F_255814073_eVeqoLhJQ31uBZ3fcgaaRcYgEtYDkYkF.jpg'
import { Input } from "@/components/ui/input"
export default function QuestionInput(){
    return(
        <div className={`w-full flex flex-col justify-between bg-cover bg-center min-h-[20vh] md:min-h-screen px-4 py-4`}
        style={{ backgroundImage: `url(${bgImg.src || bgImg})`,}}
        >
            <Input className="bg-white text-center" type="text" placeholder="Start typing your question"/>
            <div className="grid grid-cols-2 gap-3">
                <Input className="bg-white min-h-20 text-5xl text-center" type="text" placeholder="Start typing your question"/>  
                <Input className="bg-white min-h-20 text-center" type="text" placeholder="Start typing your question"/>
                <Input className="bg-white min-h-20 text-center" type="text" placeholder="Start typing your question"/>
                <Input className="bg-white min-h-20 text-center" type="text" placeholder="Start typing your question"/>    
            </div>
        </div>
    )
}