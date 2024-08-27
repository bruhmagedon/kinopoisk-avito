import { Outlet } from "react-router-dom";

import { LeftSidebar } from "@/components/LeftSidebar/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar/RightSidebar";
import { cn } from "@/lib/utils";

const BaseLayout = () => {
  return (
    <div className={cn("flex min-h-screen bg-background")}>
      {/* <Header /> */}
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default BaseLayout;
