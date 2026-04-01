export const useMenuState = (bodyClass = 'menu-open') => {
  const isOpen = ref(false)
  const route = useRoute()
  let stopBodyClassWatch: (() => void) | null = null

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  watch(
    () => route.fullPath,
    () => {
      close()
    }
  )

  onMounted(() => {
    stopBodyClassWatch = watch(
      isOpen,
      (value) => {
        document.body.classList.toggle(bodyClass, value)
      },
      { immediate: true }
    )
  })

  onBeforeUnmount(() => {
    stopBodyClassWatch?.()
    document.body.classList.remove(bodyClass)
  })

  return {
    isOpen,
    close,
    toggle
  }
}
