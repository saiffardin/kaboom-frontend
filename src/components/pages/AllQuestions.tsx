import Question from "./Question";

export default function AllQuestions(){
    return (

        <div className="order-2 lg:order-1">
            {/* <ScrollArea className=" md:w-[20vw] overflow-auto  bg-yellow-300 min-h-[20vh] lg:max-h-screen md:min-h-screen px-4 py-4"> */}

            {/* </ScrollArea> */}
            <div  className=" flex flex-row lg:flex-col gap-4 flex-nowrap overflow-y-hidden lg:overflow-y-auto overflow-x-auto lg:overflow-x-hidden lg:h-screen max-w-full lg:max-w-[20vw] p-2 lg:p-4 lg:pb-10">
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        </div>
       
    )
}