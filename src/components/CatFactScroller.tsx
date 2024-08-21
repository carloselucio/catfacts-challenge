'use client'

import { getCatFacts } from '@/server/actions';
import Skeleton from './Skeleton';
import CatFactCard from './CatFactCard';
import ErrorCard from './ErrorCard';

export default function CatFactScroller() {
  const { data, error, isFetching, fetchNextPage } = getCatFacts();

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !isFetching) {
      fetchNextPage();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <div className='flex flex-col w-1/2 items-center text-[#000000]'>
      <>
        {data?.pages.map((group) => (
          <>
            {group?.data.map((catFact: {name: string, picture: string, fact: string}) => (
              <CatFactCard name={catFact.name} picture={catFact.picture} fact={catFact.fact}/>
            ))}
          </>
        ))}
      </>
      <>
        {isFetching && (
          <Skeleton/>
        )}
      </>
      <>
        {error && (
          <ErrorCard error={error.message}/>
        )}
      </>
    </div>
  )
}
