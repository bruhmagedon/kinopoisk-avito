import { MainPage } from "@/pages/MainPage";
import { Header } from "@/widgets/Header";

const App = () => {
  return (
    <div className="h-dvhrelative mx-auto max-w-[1160px] py-[50px]">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
