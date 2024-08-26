import { useState } from "react"
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react"

import type { Person } from "@/entities/movies"

interface ActorCardProps {
  person: Person
}

export const ActorCard = ({ person }: ActorCardProps) => {
  const [openPopover, setOpenPopover] = useState(false)

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false)
  }

  return (
    <>
      <li className='w-full cursor-pointer'>
        <Popover
          open={openPopover}
          handler={setOpenPopover}
          placement='bottom'
          animate={{
            mount: { scale: 1, y: -3 },
            unmount: { scale: 0, y: 0 }
          }}
        >
          <PopoverHandler {...triggers}>
            <img
              src={person.photo}
              alt='Фотография'
              className='h-full rounded-2xl object-cover max-lg:h-[200px] max-lg:w-[100px] lg:w-full'
            />
          </PopoverHandler>
          {/* Текст при наведении */}
          <PopoverContent className='text-elipsis z-50 flex max-w-[250px] items-center justify-center overflow-hidden rounded-lg bg-panel-darker-bg text-white'>
            {person.name}
          </PopoverContent>
        </Popover>
      </li>
    </>
  )
}
