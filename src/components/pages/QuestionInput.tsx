"use client"
import React, { useState } from "react";
import bgImg from '@/assets/images/360_F_255814073_eVeqoLhJQ31uBZ3fcgaaRcYgEtYDkYkF.jpg'
import { Input } from "@/components/ui/input"
import Menubar from "./Menubar";
import OptionInput from "./OptionInput";
type QuestionData = {
    title : string,
    a : string,
    b:string,
    c:string,
    d:string
}
export default function QuestionInput(){
    const [questionData,setQuestionData] = useState<QuestionData>({
        title: "",
        a : "",
        b: "",
        c : "",
        d : ""
    })
    const handleChange = (e: { target: { name: string; value: string; }; })=>{
        const {name,value} = e.target;
        if(value.length <70){
            setQuestionData((prevQuestionData)=>({
                ...prevQuestionData,
                [name]:value
            }))
        }
    }
    return(
        <div className={`order-1 lg:order-2 w-full flex flex-col justify-between bg-cover bg-center min-h-[75vh] lg:min-h-screen px-4 py-4 pb-10`}
        style={{ backgroundImage: `url(${bgImg.src || bgImg})`,}}
        >
            <div className="flex gap-4">
            <Input name="title" value={questionData.title} onChange={handleChange} className="bg-white text-center lg:text-3xl lg:placeholder:text-4xl lg:min-h-16" type="text" placeholder="Start typing your question"/>
           <Menubar/>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <OptionInput onChange={handleChange} name="a" value={questionData.a} placeholder="Option A" type="triangle"/>
                <OptionInput onChange={handleChange} name="b" value={questionData.b} placeholder="Option B" type="45DegRectangle"/>
                <OptionInput onChange={handleChange} name="c" value={questionData.c} placeholder="Option C" type="rectangle"/>
                <OptionInput onChange={handleChange} name="d" value={questionData.d} placeholder="Option D" type="circle"/>
            </div>
        </div>
    )
}