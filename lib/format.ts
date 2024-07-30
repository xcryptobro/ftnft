export function dollarFormat(num: number, fixed?: number) {
  const newNum =
    fixed && fixed !== 2 ? `${num.toFixed(fixed)}` : `${num.toLocaleString()}`
  return num < 0 ? `-$${newNum.slice(1)}` : `$${newNum}`
}

export function commaFormat(num: number) {
  return num.toLocaleString()
}

export function percentFormat(num: number) {
  return `${(num * 100).toFixed(2)}%`
}
