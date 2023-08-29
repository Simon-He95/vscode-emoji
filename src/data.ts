import emojiEn from './emojiEn'
import emojiZh from './emojiZh'

export const data = [
  ...emojiEn,
  ...emojiZh,
]

export function transfer(base: string, data: string[]) {
  return data.map((item: string) => [base, item])
}
