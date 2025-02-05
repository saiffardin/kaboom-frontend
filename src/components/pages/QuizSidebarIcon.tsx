"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function QuizSidebarIcon(){
    const [isOpen,setIsOpen]=useState(true);
    return (
        <>
             <span onClick={()=>setIsOpen(!isOpen)} className="bg-[#F4F4F5] px-2 xl:px-3 py-3 xl:py-4 rounded-lg text-3xl xl:text-7xl text-black font-extrabold ">
                {isOpen ? <ArrowRight className="text-5xl"/> : <ArrowLeft/>}
             </span> 
        </>
    )
}