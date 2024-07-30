import Image from 'next/image'
import { dollarFormat } from '@/lib/format'

export default function Token({ price, img }: { price: number; img: string }) {
  return (
    <div className='text-center mx-auto'>
      <Image
        src={img}
        alt='Token Icon'
        width='100'
        height='100'
        className='rounded-full'
      />
      <p className='text-2xl text-center'>Price: {dollarFormat(price, 6)}</p>
    </div>
  )
}