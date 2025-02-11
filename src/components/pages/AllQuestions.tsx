import { Button } from "../ui/button";
import Question from "./Question";

export default function AllQuestions(){
    return (

        <div className="order-2 lg:order-1">
            <div  className=" flex flex-row lg:flex-col gap-4 flex-nowrap overflow-y-hidden lg:overflow-y-auto overflow-x-auto lg:overflow-x-hidden lg:h-screen max-w-full lg:max-w-[20vw] p-2 lg:p-4 lg:pb-10">
                <Question/>
                <Button variant="outline" className="bg-blue-600 text-white border-blue-600
                py-12 lg:py-2 my-auto lg:my-0
                ">Add Question</Button>
            </div>
        </div>
       
    )
}