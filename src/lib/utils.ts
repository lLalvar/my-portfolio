import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { InputType } from '@/components/ui/input'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatInputValue(
  value: number | string | null | undefined | readonly string[],
  type: InputType
) {
  if (!value) {
    return ''
  }
  if (typeof value === 'number') {
    value = value.toString()
  }
  if (typeof value === 'string') {
    if (type === 'integerWithDecimal') {
      return value.replace(/[^0-9.]/g, '')
    }
    if (type === 'integerWithPlus') {
      return value.replace(/[^0-9+]/g, '')
    }
    if (type === 'integer') {
      return value.replace(/[^0-9]/g, '')
    }
  }
  return value
}
