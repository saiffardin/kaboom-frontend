"use client"
import React, { useState } from 'react'
import { EllipsisVertical } from "lucide-react";
import SelectQuestionType from "./QuizSidebar/SelectQuestionType";
import SelectTimer from "./QuizSidebar/SelectTimer";
function Menubar() {
    const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className="relative lg:hidden  text-black bg-white min-h-8 min-w-8 rounded-[50%]  flex  gap-0 justify-center items-center"
    >
    <EllipsisVertical  onClick={()=>setOpenMenu(!openMenu)}/>
    {
            openMenu ? 
            <div className=" absolute top-10 px-4 pb-4 right-0 bg-white rounded-lg ">
                <div className="w-[200px] "><SelectQuestionType/>
                    <SelectTimer/>
                    </div> 
               
            </div> : ""
        }
   
    </div>
  )
}

export default Menubar