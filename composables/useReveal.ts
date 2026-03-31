export const useReveal = () => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((element) => observer?.observe(element))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
