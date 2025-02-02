import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function SelectQuestionType(){
    return (
        <div>
            <h3 className="mb-2  text-lg">Question type</h3>
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="Quiz" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="quiz">Quiz</SelectItem>
                <SelectItem value="boolean">True/False</SelectItem>
            </SelectContent>
            </Select>
        </div>

    )
}