export const useReveal = () => {
  let observer: IntersectionObserver | null = null
  let prefersReducedMotion = false

  onMounted(() => {
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
                    opacity: 0.82,
                    transform: 'translateY(18px) scale(0.985)'
                  },
                  {
                    opacity: 1,
                    transform: 'translateY(0) scale(1)'
                  }
                ],
                {
                  duration: 720,
                  delay,
                  easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
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
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
