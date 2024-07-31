import Link from 'next/link'
import { tokenPrice } from '@/lib/coingecko'
import Token from '@/components/Token'

export default async function Home() {
  const well3Res = await tokenPrice('well3')
  const { current_price: well3Price, image: well3Image } = well3Res[0]

  const monRes = await tokenPrice('mon-protocol')
  const { current_price: monPrice, image: monImage } = monRes[0]

  const memeRes = await tokenPrice('memecoin-2')
  const { current_price: memePrice, image: memeImage } = memeRes[0]

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-row justify-center gap-16'>
        <div>
          <Link href='/memeland'>
            <Token price={memePrice} img={memeImage} />
          </Link>
        </div>
        <div>
          <Link href='/well'>
            <Token price={well3Price} img={well3Image} />
          </Link>
        </div>
        <div>
          <Link href='/pixelmon'>
            <Token price={monPrice} img={monImage} />
          </Link>
        </div>
      </div>
    </main>
  )
}
