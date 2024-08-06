export const formatToWan = (num: number): string => {
  if (num === null || num === undefined) return '0'
  if (num < 10000) return `${num}`
  const wanValue = (num / 10000).toFixed(0)
  return `${wanValue}万`
}
