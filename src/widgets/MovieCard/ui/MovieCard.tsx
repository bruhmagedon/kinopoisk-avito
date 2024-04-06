export const MovieCard = () => {
  return (
    <>
      <li className="@apply w-[200px] h-[318px] bg-[#232222] cursor-pointer">
        {/* <img src={item.thumbnail} alt={item.name} style={imgStyle} /> */}
        <div className="bg-green-300 w-[200px] h-[200px] translate-x-[-15px] translate-y-[-15px]"></div>
        <div className="font-[bold] text-[22px] leading-[29px] uppercase text-white">
          {"Ну карточка"}
        </div>
      </li>
    </>
  );
};
