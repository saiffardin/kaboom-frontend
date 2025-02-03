"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function QuizSidebarIcon(){
    const [isOpen,setIsOpen]=useState(true);
    return (
        <>
            {isOpen ? <span onClick={()=>setIsOpen(!isOpen)} className="bg-[#F4F4F5] px-2 py-3 rounded-lg text-3xl">< ArrowRight/></span> :<span className="bg-[#F4F4F5] px-2 py-3 rounded-lg text-3xl" onClick={()=>setIsOpen(!isOpen)}><ArrowLeft/></span>}
        </>
    )
}