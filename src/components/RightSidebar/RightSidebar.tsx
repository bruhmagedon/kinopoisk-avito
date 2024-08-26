import { cn } from "@/lib/utils"

import { Input } from "../ui/input"

interface SidebarProps {
  className?: string
}

export const RightSidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn("flex flex-col gap-5 px-6 py-9", className)}>
      <Input placeholder='Поиск' />
      <div className='w-full flex-1 rounded-md bg-primary'></div>
    </aside>
  )
}
