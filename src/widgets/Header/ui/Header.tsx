import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

interface HeaderProps {}

export const Header = () => {
  return (
    <header className="">
      <nav className=" bg-slate-500 flex justify-center items-center px-36 py-2">
        <div className="flex-1">Лого</div>
        <Input />
        <div className="flex-1 flex justify-end">
          <Button>Аккаунт</Button>
        </div>
      </nav>
    </header>
  );
};
