import { siteName } from '~/data/site'
import type { PageSeoContent } from '~/types/profile'

export const usePageSeo = ({ title, description, ogTitle }: PageSeoContent) => {
  useSeoMeta({
    title,
    ogTitle: ogTitle ?? `${title} · ${siteName}`,
    description,
    ogDescription: description
  })
}
