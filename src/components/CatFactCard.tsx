import Image from "next/image";

export default function CatFactCard({name, picture, fact}: {name: string, picture: string, fact: string}) {
  return (
    <div className='flex flex-col w-full h-auto p-4 my-2 rounded-lg bg-[#FFFFFF] shadow-md'>
      <div className="flex flex-row items-center w-full h-auto mb-2">
        <Image alt={'Profile Picture'} src={picture} width={30} height={30} className="rounded-full mr-2"/>
        <h1 className="font-bold text-base">{name}</h1>
      </div>
      <p className="text-sm">
        {fact}
      </p>    
    </div>
  );
}
