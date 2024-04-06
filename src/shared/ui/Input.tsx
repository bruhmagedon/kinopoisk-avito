import { InputHTMLAttributes, FC } from "react";
import Find from "@/shared/assets/icons/Find";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export const Input: FC<InputProps> = () => {
  return (
    <form className="w-[35%] mx-auto">
      <div className="flex bg-[#F6F7FB] h-[37px] items-center justify-between rounded-md p-2">
        <div className="flex items-center gap-3">
          <Find />
          <input
            type="text"
            placeholder="Поиск фильма"
            //   required
            className="outline-none bg-[#F6F7FB]"
          />
        </div>
        <button type="submit" className="">
          Искать
        </button>
      </div>
    </form>
  );
};
