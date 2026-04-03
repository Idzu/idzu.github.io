export const useReveal = () => {
  const route = useRoute()
  let observer: IntersectionObserver | null = null
  let prefersReducedMotion = false

  const revealElements = () => {
    observer?.disconnect()

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!elements.length) {
      return
    }

    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement

            element.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -6% 0px'
      }
    )

    elements.forEach((element) => {
      element.classList.remove('is-visible')
      observer?.observe(element)
    })
  }

  onMounted(() => {
    revealElements()
  })

  watch(
    () => route.fullPath,
    async () => {
      await nextTick()
      revealElements()
    }
  )

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
