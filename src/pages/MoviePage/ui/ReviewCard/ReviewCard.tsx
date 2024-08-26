import { useEffect, useState } from "react"

import type { ReviewData } from "@/entities/movies/model/MovieApiTypes"

interface ReviewCardProps {
  review: ReviewData
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [formatedDate, setFormatedDate] = useState(null)
  useEffect(() => {
    const date = new Date(review.date)
    setFormatedDate(
      `${date.getDate()}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${date.getFullYear()} в ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
    )
  }, [review])
  return (
    <>
      <li className='flex cursor-pointer flex-col gap-3 rounded-lg bg-panel-darker-bg p-3'>
        <header className=''>
          <p className='font-medium'>{review.type}</p>
          <h3 className='text-sm font-medium text-gray-500'>{review.author}</h3>
        </header>
        <section>
          <div className='h-[120px] overflow-auto'>
            <p dangerouslySetInnerHTML={{ __html: review.review }} />
          </div>
          <p className='mt-3 text-sm text-gray-500'>{formatedDate}</p>
        </section>
      </li>
    </>
  )
}
