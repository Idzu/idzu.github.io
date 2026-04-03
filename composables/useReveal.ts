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

            if ('animate' in element) {
              const delay = Number.parseInt(element.style.getPropertyValue('--reveal-delay') || '0', 10)

              element.animate(
                [
                  {
                    opacity: 0,
                    transform: 'translate3d(0, 26px, 0) scale(0.975)',
                    filter: 'blur(12px)'
                  },
                  {
                    opacity: 1,
                    transform: 'translate3d(0, -4px, 0) scale(1.01)',
                    filter: 'blur(0px)',
                    offset: 0.7
                  },
                  {
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0) scale(1)',
                    filter: 'blur(0px)'
                  }
                ],
                {
                  duration: 820,
                  delay,
                  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  fill: 'both'
                }
              )
            }

            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px'
      }
    )

    elements.forEach((element) => observer?.observe(element))
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
