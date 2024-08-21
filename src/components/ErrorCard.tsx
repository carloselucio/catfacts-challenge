export default function ErrorCard({error}: {error: string}) {
  return (
    <div className='flex flex-col w-full h-auto p-4 my-2 rounded-lg bg-[#FFFFFF] shadow-md'>
      <h1 className="font-bold text-base text-[#A80000]">{'An error occured while fetching:'}</h1>
      <p className="text-sm">
        {error}
      </p>    
    </div>
  );
}