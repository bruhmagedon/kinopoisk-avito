import { SearchPanel } from "@/features/search";
import { Button } from "@/shared/ui/Button";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  //№ Сюда useDebounce
  // input будет в стиле твича, со всеми плюшками и историей в локал сторедже
  // думаю сюда ещё можно будет добавить глобальный стейт. мы через ртк делаем отсюда запрос к апи, ответ записывается в стор
  // из стора достаем нужную инфу в MovieList
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <header className="">
      <nav className=" bg-slate-500 flex justify-center items-center px-36 py-2">
        <div className="flex-1 cursor-pointer" onClick={onNavigate}>
          На главную
        </div>
        <SearchPanel />
        <div className="flex-1 flex justify-end">
          <Button>Аккаунт</Button>
        </div>
      </nav>
    </header>
  );
};
