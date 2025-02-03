import {
    Sidebar,
    SidebarContent,
    SidebarTrigger,
  } from "@/components/ui/sidebar"
import SelectQuestionType from "./SelectQuestionType"
import SelectTimer from "./SelectTimer"
  
  export function QuizSidebar() {
    return (
      <Sidebar side="right" className="hidden lg:block">

      <SidebarTrigger className="absolute -left-10 top-1/2 -translate-y-[50%]"/>
       <SidebarContent className="p-4">
        <SelectQuestionType/>
        <SelectTimer/>
       </SidebarContent>
      </Sidebar>
    )
  }
  