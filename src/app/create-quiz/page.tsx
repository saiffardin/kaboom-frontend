
import AllQuiz from "@/components/pages/AllQuiz";
import QuestionInput from "@/components/pages/QuestionInput";

export default function CreateQuiz() {

  return (
    <div className="flex flex-col lg:flex-row min-w-full h-screen justify-between">
      <AllQuiz />
      <QuestionInput />
    </div>
  );
}
