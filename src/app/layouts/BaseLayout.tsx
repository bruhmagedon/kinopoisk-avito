import { Outlet } from 'react-router-dom';

import { LeftSidebar } from '@/components/LeftSidebar/LeftSidebar';
import { RightSidebar } from '@/components/RightSidebar/RightSidebar';

const BaseLayout = () => {
  return (
    <div className='bg-background min-h-screen flex '>
      {/* <Header /> */}
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default BaseLayout;
