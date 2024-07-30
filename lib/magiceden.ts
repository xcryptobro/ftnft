export async function getCollection(contract: string) {
  const params = new URLSearchParams({
    id: contract,
    includeMintStages: 'false',
    includeSecurityConfigs: 'false',
    normalizeRoyalties: 'false',
    useNonFlaggedFloorAsk: 'false',
    sortBy: 'allTimeVolume',
    limit: '20'
  })
  const url = `https://api-mainnet.magiceden.dev/v3/rtp/ethereum/collections/v7?${params.toString()}`
  const result = await fetch(url, { method: 'GET' }).then((res) => res.json())
  const collection = result.collections[0]
  const data = {
    title: collection.name,
    banner: collection.banner,
    img: collection.image,
    ask: collection.floorAsk.price.amount.decimal,
    askUsd: collection.floorAsk.price.amount.usd,
    bid: collection.topBid.price.amount.decimal,
    bidUsd: collection.topBid.price.amount.usd
  }
  return data
}

export async function getPricesByRarity(contract: string) {
  const url = `https://api-mainnet.magiceden.dev/v3/rtp/ethereum/collections/${contract}/attributes/all/v4`
  const result = await fetch(url, {
    method: 'GET',
    next: { revalidate: 300 }
  }).then((res) => res.json())
  const attributes = result.attributes
  const rarity = attributes.find((i: any) => i.key === 'Rarity')
  return rarity
}
