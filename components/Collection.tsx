import Image from 'next/image'
import { dollarFormat, commaFormat } from '@/lib/format'

export default function Collection({
  title,
  img,
  banner,
  ask,
  askUsd,
  bid,
  bidUsd,
  locked,
  tokenPriceUsd,
  contract
}: {
  title: string
  img: string
  banner: string
  ask: number
  askUsd: number
  bid: number
  bidUsd: number
  locked: number
  tokenPriceUsd: number
  contract: string
}) {
  const effectivePrice = askUsd / locked
  const discount = tokenPriceUsd - effectivePrice
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <Image src={banner} alt={title} width={1000} height={250} />
      </figure>
      <div className='card-body'>
        <div className='flex flex-row justify-between'>
          <div className='pr-5'>
            <Image src={img} alt={title} width={250} height={250} />
          </div>
          <div>
            <h2 className='card-title'>{title}</h2>
            <p>
              Highest&nbsp;Bid:&nbsp;{bid}&nbsp;({dollarFormat(bidUsd)})<br />
              Lowest&nbsp;Ask:&nbsp;{ask}&nbsp;({dollarFormat(askUsd)})<br />
              Locked&nbsp;Tokens:&nbsp;{commaFormat(locked)}
              <br />
              Effective&nbsp;Token&nbsp;Price:&nbsp;
              {dollarFormat(effectivePrice, 6)}
              <br />
              Token&nbsp;Discount:&nbsp;{dollarFormat(discount, 6)}
            </p>
            <div className='card-actions justify-end'>
              <a
                href={`https://magiceden.io/collections/ethereum/${contract}`}
                className='btn btn-primary btn-sm mt-4'
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
