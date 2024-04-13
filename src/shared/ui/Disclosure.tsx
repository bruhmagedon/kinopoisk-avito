import { SeriesApiResponse } from "@/entities/movies";
import { SeriesPagination } from "@/pages/MoviePage/ui/SeriesPagination/SeriesPagination";
import { Disclosure as TailwinDisclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface DisclosureProps {
  seasonsData: SeriesApiResponse;
  isLoading: boolean;
}

export default function Disclosure({
  seasonsData,
  isLoading,
}: DisclosureProps) {
  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <div className="w-full">
      <ul className="mx-auto w-full rounded-2xl bg-white p-2 flex flex-col gap-3">
        {seasonsData.docs.map((season, index) => {
          return (
            <TailwinDisclosure key={index}>
              {({ open }) => (
                <>
                  <TailwinDisclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{season.name}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </TailwinDisclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <TailwinDisclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <SeriesPagination series={season.episodes} />
                    </TailwinDisclosure.Panel>
                  </Transition>
                </>
              )}
            </TailwinDisclosure>
          );
        })}

        {/* <TailwinDisclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <TailwinDisclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </TailwinDisclosure.Button>
              <TailwinDisclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </TailwinDisclosure.Panel>
            </>
          )}
        </TailwinDisclosure> */}
      </ul>
    </div>
  );
}
