import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
   return (
      <div className="relative mx-auto h-dvh max-w-[1160px] bg-background-dark py-10">
         <Header />
         <Outlet />
      </div>
   );
};

export default BaseLayout;
