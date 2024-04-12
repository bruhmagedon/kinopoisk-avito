import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="h-dvh relative mx-auto max-w-[1160px] py-[50px]">
      <Header />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
