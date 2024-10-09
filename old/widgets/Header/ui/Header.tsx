import { useNavigate } from "react-router-dom";
import { SearchPanel } from "old/features/search";
import { Button } from "old/shared";

export const Header = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <header className='rounded-lg bg-panel-darker-bg'>
      <nav className='flex items-center justify-center px-36 py-5 max-lg:gap-4 max-lg:px-5 lg:justify-between'>
        <div className='max-lg:flex-0 cursor-pointer' onClick={onNavigate}>
          <span className='text-lg font-medium text-white hover:text-primary'>Главная</span>
        </div>
        <SearchPanel />
        <div className='flex justify-end max-lg:hidden'>
          <Button className='invisible'>Аккаунт</Button>
        </div>
      </nav>
    </header>
  );
};
