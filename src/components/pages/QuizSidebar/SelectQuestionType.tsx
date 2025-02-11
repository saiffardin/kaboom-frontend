import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { MessageCircleQuestion } from "lucide-react"
  

export default function SelectQuestionType(){
    return (
        <div>
            <div className="flex items-center gap-1 mb-2">
                <MessageCircleQuestion size={18} strokeWidth={1.4} absoluteStrokeWidth />
                <h3 className="text-lg font-extrabold">Question type</h3>
            </div>
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