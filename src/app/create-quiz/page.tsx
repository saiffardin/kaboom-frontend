
import AllQuestions from "@/components/pages/AllQuestions";
import QuestionInput from "@/components/pages/QuestionInput";

export default function CreateQuiz() {

  return (
    <div className="flex flex-col lg:flex-row min-w-full h-screen gap-4 lg:gap-0">
      <AllQuestions />
      <QuestionInput />
    </div>
  );
}
