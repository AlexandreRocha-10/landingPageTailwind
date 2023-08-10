import Image from "next/image";

import Arrow from '@/assets/arrow-down.svg';

type ScriptProps = {
    name: string;
}

export default function ItemMenu({ name }: ScriptProps) {
  return (
    <button className='flex items-center gap-3'>
        <span className='text-white font-bold'>{ name }</span>
        <Image
        src={Arrow}
        alt="Arrow"
        />
    </button>            
  )
}