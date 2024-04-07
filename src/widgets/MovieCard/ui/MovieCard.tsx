import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useFetchAllMoviesQuery } from "@/entities/movies";

export const MovieCard = () => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  if (isLoading) {
    return <div>Загруз-очка</div>;
  }

  if (data) {
    return (
      <>
        <li className="w-full h-[300px] cursor-pointer relative">
          <Popover
            open={openPopover}
            handler={setOpenPopover}
            placement="bottom"
            animate={{
              mount: { scale: 1, y: -3 },
              unmount: { scale: 0, y: 0 },
            }}
          >
            <PopoverHandler {...triggers}>
              <img
                src={data.poster.url}
                alt={"Фотография"}
                className="object-cover w-full h-full rounded-2xl"
              />
            </PopoverHandler>
            {/* Текст при наведении */}
            <PopoverContent className="z-50 max-w-[250px] text-elipsis overflow-hidden h-[25px]">
              {data.name}
            </PopoverContent>
          </Popover>
          <div className="absolute z-50111 w-[30px] h-[30px] bg-red-300 left-0 top-0 ">
            {data.rating.kp.toFixed(1)}
          </div>
        </li>
      </>
    );
  }
};
