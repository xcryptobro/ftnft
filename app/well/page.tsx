import { getCollection } from '@/lib/magiceden'
import { tokenPrice } from '@/lib/coingecko'
import Collection from '@/components/Collection'
import Token from '@/components/Token'

export default async function WellPage() {
  const well3Res = await tokenPrice('well3')
  const { current_price: well3Price, image: well3Image } = well3Res[0]

  const genesisInfo = {
    contract: '0x76cc4742f7eaa89a93576505dec37c2c66a76ab7',
    locked: 4100000
  }
  const yogapetzInfo = {
    contract: '0x142e03367ede17cd851477a4287d1f35676e6dc2',
    locked: 321303
  }
  const kubzInfo = {
    contract: '0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349',
    locked: 178500
  }

  const kzg = await getCollection(genesisInfo.contract)
  const yp = await getCollection(yogapetzInfo.contract)
  const kubz = await getCollection(kubzInfo.contract)

  return (
    <div className='flex flex-col gap-8 py-8'>
      <div className='flex flex-row justify-center gap-8 text-center'>
        <Token price={well3Price} img={well3Image} />
      </div>
      <div className='flex flex-row justify-center gap-8'>
        <div>
          <Collection
            title='Keungz Genesis'
            img={kzg.img}
            banner={kzg.banner}
            ask={kzg.ask}
            askUsd={kzg.askUsd}
            bid={kzg.bid}
            bidUsd={kzg.bidUsd}
            locked={genesisInfo.locked}
            tokenPriceUsd={well3Price}
            contract={genesisInfo.contract}
          />
        </div>
        <div>
          <Collection
            title='Yogapetz'
            img={yp.img}
            banner={yp.banner}
            ask={yp.ask}
            askUsd={yp.askUsd}
            bid={yp.bid}
            bidUsd={yp.bidUsd}
            locked={yogapetzInfo.locked}
            tokenPriceUsd={well3Price}
            contract={yogapetzInfo.contract}
          />
        </div>
        <div>
          <Collection
            title='Kubz'
            img={kubz.img}
            banner={kubz.banner}
            ask={kubz.ask}
            askUsd={kubz.askUsd}
            bid={kubz.bid}
            bidUsd={kubz.bidUsd}
            locked={kubzInfo.locked}
            tokenPriceUsd={well3Price}
            contract={kubzInfo.contract}
          />
        </div>
      </div>
    </div>
  )
}
