import { MainPage } from "@/pages/MainPage";
import { Header } from "@/widgets/Header";

const App = () => {
  return (
    // <div className="h-dvh bg-slate-300 flex flex-col">
    <div className="h-dvh bg-slate-300 relative mx-auto w-[1100px] py-[50px]">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
