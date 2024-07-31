import Image from 'next/image'
import { microDollarFormat } from '@/lib/format'

export default function Token({ price, img }: { price: number; img: string }) {
  return (
    <div className='flex flex-col align-middle items-center'>
      <Image
        src={img}
        alt='Token Icon'
        width='100'
        height='100'
        className='rounded-full'
      />
      <p className='text-2xl text-center'>{microDollarFormat(price, 6)}</p>
    </div>
  )
}
