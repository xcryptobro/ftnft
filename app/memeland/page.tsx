import Collection from '@/components/Collection'
import { getCollection } from '@/lib/magiceden'
import { tokenPrice } from '@/lib/coingecko'
import Token from '@/components/Token'

export default async function MemePage() {
  const tokenResult = await tokenPrice('memecoin-2')
  const res = tokenResult[0]
  const meme = res.current_price
  const memeImage = res.image

  const startDate = Date.parse('7/19/2024')
  const endDate = Date.now()
  const elapsedDays = Math.floor((endDate - startDate) / 86400000)

  const mvpInfo = {
    contract: '0x6efc003d3f3658383f06185503340c2cf27a57b6',
    locked: elapsedDays < 440 ? 7242217 - elapsedDays * 16459 : 0
  }
  const captainzInfo = {
    contract: '0x769272677fab02575e84945f03eca517acc544cc',
    locked: elapsedDays < 440 ? 603512 - elapsedDays * 1371 : 0
  }
  const potatozInfo = {
    contract: '0x39ee2c7b3cb80254225884ca001f57118c8f21b6',
    locked: elapsedDays < 440 ? 201171 - elapsedDays * 457 : 0
  }
  const mvp = await getCollection(mvpInfo.contract)
  const captainz = await getCollection(captainzInfo.contract)
  const potatoz = await getCollection(potatozInfo.contract)
  return (
    <div className='flex flex-col pt-16 gap-8 items-center'>
      <Token price={meme} img={memeImage} />
      <div className='flex flex-col xl:flex-row justify-center gap-8'>
        <Collection
          title='MVP'
          img={mvp.img}
          banner={mvp.banner}
          ask={mvp.ask}
          askUsd={mvp.askUsd}
          bid={mvp.bid}
          bidUsd={mvp.bidUsd}
          locked={mvpInfo.locked}
          tokenPriceUsd={meme}
          contract={mvpInfo.contract}
        />
        <Collection
          title='Captainz'
          img={captainz.img}
          banner={captainz.banner}
          ask={captainz.ask}
          askUsd={captainz.askUsd}
          bid={captainz.bid}
          bidUsd={captainz.bidUsd}
          locked={captainzInfo.locked}
          tokenPriceUsd={meme}
          contract={captainzInfo.contract}
        />
        <Collection
          title='Potatoz'
          img={potatoz.img}
          banner={potatoz.banner}
          ask={potatoz.ask}
          askUsd={potatoz.askUsd}
          bid={potatoz.bid}
          bidUsd={potatoz.bidUsd}
          locked={potatozInfo.locked}
          tokenPriceUsd={meme}
          contract={potatozInfo.contract}
        />
      </div>
    </div>
  )
}
