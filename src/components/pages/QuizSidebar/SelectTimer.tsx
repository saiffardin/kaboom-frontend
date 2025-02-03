import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function SelectTimer(){
    return (
        <div>
            <h3 className="my-2 text-lg font-extrabold">Timer limit</h3>
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="5 seconds" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="5s">5 seconds</SelectItem>
                <SelectItem value="10s">10 seconds</SelectItem>
                <SelectItem value="15s">15 seconds</SelectItem>
                <SelectItem value="20s">20 seconds</SelectItem>
                <SelectItem value="30s">30 seconds</SelectItem>
                <SelectItem value="45s">45 seconds</SelectItem>
                <SelectItem value="1min">1 minutes</SelectItem>
                <SelectItem value="1.5min">1 minute 30 seconds</SelectItem>
            </SelectContent>
            </Select>
        </div>

    )
}