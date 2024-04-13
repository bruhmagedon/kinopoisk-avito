import { ReviewData } from "@/entities/movies/model/MovieApiTypes";
import { useEffect, useState } from "react";

interface ReviewCardProps {
  review: ReviewData;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [formatedDate, setFormatedDate] = useState(null);
  useEffect(() => {
    const date = new Date(review.date);
    setFormatedDate(
      `${date.getDate()}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${date.getFullYear()} в ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
    );
  }, [review]);
  return (
    <>
      <li className="cursor-pointer">
        <header className="">
          <h3>{review.author}</h3>
          <p className="">{review.type}</p>
        </header>
        <section>
          <div className="h-[120px] overflow-auto">
            <p dangerouslySetInnerHTML={{ __html: review.review }} />
          </div>
          <p>{formatedDate}</p>
        </section>
      </li>
    </>
  );
};
