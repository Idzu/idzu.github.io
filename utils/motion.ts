import type { CSSProperties } from 'vue'

export const createRevealStyle = (delay: number): CSSProperties => ({
  '--reveal-delay': `${delay}ms`
})

export const createStaggeredRevealStyle = (index: number, startDelay: number, step = 80): CSSProperties =>
  createRevealStyle(startDelay + index * step)
