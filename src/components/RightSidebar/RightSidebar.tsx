import { cn } from '@/lib/utils';

import { Input } from '../ui/input';

interface SidebarProps {
  className?: string;
}

export const RightSidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn('py-9 px-6 flex flex-col gap-5', className)}>
      <Input placeholder='Поиск' />
      <div className='bg-primary w-full flex-1 rounded-md'></div>
    </aside>
  );
};
