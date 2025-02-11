"use client"
import React, { MouseEventHandler, useState } from "react";
import bgImg from '@/assets/images/360_F_255814073_eVeqoLhJQ31uBZ3fcgaaRcYgEtYDkYkF.jpg'
import { Input } from "@/components/ui/input"
import Menubar from "./Menubar";
import OptionInput from "./OptionInput";

interface QuestionOptions {
    value : string,
    correct : boolean,
    type: "triangle" | "45DegRectangle" | "rectangle" | "circle"
}
export default function QuestionInput(){
    const [questionTitle,setQuestionTitle] = useState<string>("");
    const [questionOptions,setQuestionOptions] = useState<QuestionOptions[]>([{
        value : "",
        correct : false,
        type : "45DegRectangle"
    },
    {
        value : "",
        correct : false,
        type : "circle"
    },
    {
        value : "",
        correct : false,
        type : "rectangle"
    },
    {
        value : "",
        correct : false,
        type : "triangle"
    }]
    )

    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement >)=>{
        const {value} = e.target;
        console.log(value)
        if(value.length <70){
           setQuestionTitle(value)
        }
    }
    const handleOptionChange = (e:React.ChangeEvent<HTMLTextAreaElement >,index:number)=>{
        const {value} = e.target;
        const updateOptions = [...questionOptions];
        updateOptions[index].value =value
        console.log(updateOptions)
        setQuestionOptions(updateOptions)
    }
    const handleSelectQuestion = (e: MouseEventHandler<HTMLDivElement>,index : number)=>{
        const updateOptions = [...questionOptions];
        // let updatedOptions = updateOptions.map((option)=>(option.correct = false))
        
        updateOptions[index].correct = true;
        setQuestionOptions(updateOptions)
    }
    return(
        <div className={`order-1 lg:order-2 w-full flex flex-col justify-between bg-cover bg-center min-h-[75vh] lg:min-h-screen px-4 py-4 pb-10`}
        style={{ backgroundImage: `url(${bgImg.src || bgImg})`,}}
        >
            <div className="flex gap-4">
            <Input name="title" value={questionTitle} onChange={handleTitleChange} className="bg-white text-center lg:text-3xl lg:placeholder:text-4xl lg:min-h-16" type="text" placeholder="Start typing your question"/>
           <Menubar/>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {
                    questionOptions.map((option: QuestionOptions,index)=>(
                        <OptionInput onclick={(e)=>handleSelectQuestion(e,index)} selectEffect = {option.correct} key={index} placeholder={"input Option" } value={option.value} type={option.type} onChange={(e)=>handleOptionChange(e,index)}/>
                    ))
                }
            </div> 
        </div>
    )
}