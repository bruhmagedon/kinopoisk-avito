import { cn } from '@/lib/utils';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../SidebarItem/SidebarItemsList';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

interface SidebarProps {
  className?: string;
}

export const LeftSidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn('flex flex-col py-9 px-6 gap-5', className)}>
      <p className='text-2xl font-bold'>
        <span className='text-primary'>Flixi</span>fy
      </p>
      <nav className='flex flex-col gap-3'>
        {SidebarItemsList.map((item) => {
          return <SidebarItem key={item.path} item={item} />;
        })}
      </nav>
      <hr className='' />
      <div className='flex items-center space-x-2'>
        <Switch id='airplane-mode' />
        <Label htmlFor='airplane-mode'>Dark Mode</Label>
      </div>
    </aside>
  );
};
