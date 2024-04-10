import { Button } from "@/shared";
import CardsViewList from "@/shared/assets/icons/cards-view-list.svg";
import CardsViewGrid from "@/shared/assets/icons/cards-view-grid.svg";

export const SortPanel = () => {
  return (
    <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
      {/*Изменить вид списка*/}
      <div className="flex items-center">
        <p className="flex-1">Вид списка:</p>
        <div className="flex items-center">
          <Button>
            <CardsViewGrid />
          </Button>
          <Button>
            <CardsViewList />
          </Button>
        </div>
      </div>
      {/* <Select /> */}
      {/* <Select selectItems={countViewMovies} /> */}
      {/*Сколько показывать карточек на одной страничке*/}
    </div>
  );
};
