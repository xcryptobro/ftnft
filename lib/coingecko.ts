export async function tokenPrice(token: string) {
  const headers: HeadersInit = {
    accept: 'application/json',
    'x-cg-api-key': process.env.COINGECKO_API_KEY || ''
  }

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${token}`,
    {
      method: 'GET',
      headers,
      next: { revalidate: 300 }
    }
  )

  return res.json()
}
