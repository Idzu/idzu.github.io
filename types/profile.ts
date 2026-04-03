export interface NavItem {
  label: string
  to: string
}

export interface ActionLink {
  label: string
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
}

export interface HeroMetaItem {
  label: string
  value: string
}

export interface HeroVisualPanel {
  eyebrow: string
  title: string
  items: string[]
}

export interface HeroContent {
  eyebrow: string
  title: string
  description: string
  actions: ActionLink[]
  meta: HeroMetaItem[]
  visual: {
    eyebrow: string
    panels: HeroVisualPanel[]
  }
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  title: string
  category: string
  concept: string
  responsibilities: string[]
  stack: string[]
  impact: string
  link?: ProjectLink
  featured?: boolean
}

export interface ContactLink {
  label: string
  value: string
  href: string
  note?: string
}

export interface ExperienceGroup {
  title: string
  items: string[]
}

export interface ExperienceContent {
  role: string
  description: string
  groups: ExperienceGroup[]
}

export interface MetricItem {
  title: string
  description: string
}

export interface SectionContent {
  eyebrow?: string
  title: string
  subtitle?: string
}

export interface PageSeoContent {
  title: string
  description: string
  ogTitle?: string
}

export interface NowItem {
  label: string
  title: string
  description: string
}

export interface NowSectionContent {
  eyebrow: string
  title: string
  description: string
  note: string
  items: NowItem[]
}

export interface FinalCtaContent {
  eyebrow: string
  title: string
  description: string
  actions: ActionLink[]
  topics: string[]
}

export interface ThemePalette {
  background: [string, string, string]
  primary: string
  accent: [string, string]
  text: [string, string, string]
  border: string
  success: string
  warning: string
  error: string
}
