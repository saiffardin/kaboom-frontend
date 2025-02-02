"use client"
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import SelectQuestionType from "./SelectQuestionType";
import SelectTimer from "./SelectTimer";

export default function SideBar(){
    const [toggleSidebar,setToggleSidebar]=useState(true)
    return(
        <div className={`relative hidden md:block ${toggleSidebar ? "min-w-[20vw] px-4 py-4" : "min-w-0"} transition-[500] ease-in-out min-h-screen `}>
            <span className={`absolute top-1/2 -left-10 -translate-y-[50%] cursor-pointer transition-transform duration-500 px-2 py-3 rounded-lg bg-white `}
            onClick={()=>setToggleSidebar(!toggleSidebar)}
            >
                <BiRightArrow className={`${toggleSidebar ? "rotate-180" : ""}`}/>
            </span>
            {
                toggleSidebar ?  
                    <div>
                        <SelectQuestionType/>
                        <hr className="my-6"/>
                        <SelectTimer/>
                    </div> : ""
            }
           
        </div>
    )
}