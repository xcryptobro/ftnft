import Collection from '@/components/Collection'
import { getCollection, getPricesByRarity } from '@/lib/magiceden'
import { tokenPrice } from '@/lib/coingecko'
import Token from '@/components/Token'

export default async function PixelmonPage() {
  const tokenResult = await tokenPrice('mon-protocol')
  const res = tokenResult[0]
  const mon = res.current_price
  const monImage = res.image

  const pixelmonInfo = {
    contract: '0x32973908faee0bf825a343000fe412ebe56f802a',
    locked: {
      common: 8496,
      uncommon: 9329,
      rare: 10245,
      epic: 13661,
      legendary: 25573,
      mythical: 127449
    }
  }
  const trainerInfo = {
    contract: '0x8a3749936e723325c6b645a0901470cd9e790b94',
    locked: {
      common: 1582,
      uncommon: 1749,
      rare: 1915,
      epic: 2499,
      legendary: 4831,
      mythical: 24073
    }
  }
  const pixelmon = await getCollection(pixelmonInfo.contract)
  const trainer = await getCollection(trainerInfo.contract)

  const pixelmonRarity = await getPricesByRarity(pixelmonInfo.contract)
  const trainerRarity = await getPricesByRarity(trainerInfo.contract)

  let rarityPixelmon = {
    common: { ask: 0, askUsd: 0 },
    uncommon: { ask: 0, askUsd: 0 },
    rare: { ask: 0, askUsd: 0 },
    epic: { ask: 0, askUsd: 0 },
    legendary: { ask: 0, askUsd: 0 },
    mythical: { ask: 0, askUsd: 0 }
  }

  // pixelmonRarity.values.forEach((rarity: any) => {
  //   rarityPixelmon[rarity.key] = {
  //     ask: rarity.floorAsk.price.amount.decimal,
  //     askUsd: rarity.floorAsk.price.amount.usd
  //   }
  // })

  // let rarityTrainer = {
  //   common: { ask: 0, askUsd: 0 },
  //   uncommon: { ask: 0, askUsd: 0 },
  //   rare: { ask: 0, askUsd: 0 },
  //   epic: { ask: 0, askUsd: 0 },
  //   legendary: { ask: 0, askUsd: 0 },
  //   mythical: { ask: 0, askUsd: 0 },
  // }

  return (
    <div className='flex flex-col pt-16 gap-8 items-center'>
      <Token price={mon} img={monImage} />
      <div className='flex flex-col xl:flex-row justify-center gap-8 pt-16'>
        <Collection
          title='Pixelmon'
          img={pixelmon.img}
          banner={pixelmon.banner}
          ask={pixelmon.ask}
          askUsd={pixelmon.askUsd}
          bid={pixelmon.bid}
          bidUsd={pixelmon.bidUsd}
          locked={pixelmonInfo.locked.common}
          tokenPriceUsd={mon || 0}
          contract={pixelmonInfo.contract}
        />
        <Collection
          title='Trainers'
          img={trainer.img}
          banner={trainer.banner}
          ask={trainer.ask}
          askUsd={trainer.askUsd}
          bid={trainer.bid}
          bidUsd={trainer.bidUsd}
          locked={trainerInfo.locked.common}
          tokenPriceUsd={mon || 0}
          contract={trainerInfo.contract}
        />
      </div>
    </div>
  )
}
