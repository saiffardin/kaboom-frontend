import AllQuiz from "../components/AllQuiz";
import QuestionInput from "../components/QuestionInput";
import SideBar from "../components/SideBar";



export default function CreateQuiz(){
    return(
        <div className="flex flex-col md:flex-row overflow-hidden">
            <AllQuiz/>
            <QuestionInput/>
            <SideBar/>
        </div>
    )
};