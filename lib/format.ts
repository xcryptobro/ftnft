export function dollarFormat(num: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  const newNum = formatter.format(num)
  return num < 0 ? `-${newNum.slice(1)}` : `${newNum}`
}

export function microDollarFormat(num: number, fixed: number) {
  const newNum = `${num.toFixed(fixed)}`
  // const newNum =
  //   fixed && fixed !== 2 ? `${num.toFixed(fixed)}` : `${num.toLocaleString()}`
  return num < 0 ? `-$${newNum.slice(1)}` : `$${newNum}`
}

export function commaFormat(num: number) {
  return num.toLocaleString()
}

export function percentFormat(num: number) {
  return `${(num * 100).toFixed(2)}%`
}
