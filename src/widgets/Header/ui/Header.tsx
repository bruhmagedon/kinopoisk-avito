import { SearchPanel } from "@/features/search";
import { Button } from "@/shared";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <header className="bg-panel-darker-bg rounded-lg">
      <nav className="flex justify-center items-center px-36 py-5">
        <div className="flex-1 cursor-pointer" onClick={onNavigate}>
          <span className="text-white text-xl font-medium hover:text-primary">
            Главная
          </span>
        </div>
        <SearchPanel />
        <div className="flex-1 flex justify-end">
          <Button className="invisible">Аккаунт</Button>
        </div>
      </nav>
    </header>
  );
};
