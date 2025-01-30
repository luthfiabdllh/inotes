import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter } from "lucide-react"

export function FilterDropdown() {
  return (
    <div className="flex items-center">
      <p className="text-sm text-muted-foreground items-center mr-4 hidden sm:flex"><Filter className="mr-2 h-4 w-4" /> Filter by</p>
      <Select>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="date">Date Modified</SelectItem>
            <SelectItem value="tag">Tag</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
