import { siteName } from '~/data/site'

interface PageSeoOptions {
  title: string
  description: string
  ogTitle?: string
}

export const usePageSeo = ({ title, description, ogTitle }: PageSeoOptions) => {
  useSeoMeta({
    title,
    ogTitle: ogTitle ?? `${title} · ${siteName}`,
    description,
    ogDescription: description
  })
}
