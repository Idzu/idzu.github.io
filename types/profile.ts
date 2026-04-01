export interface NavItem {
  label: string
  to: string
}

export interface HeroAction {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
}

export interface HeroContent {
  eyebrow: string
  title: string
  description: string
  actions: HeroAction[]
  visual: {
    src: string
    alt: string
  }
}

export interface Project {
  title: string
  description: string
  tasks: string[]
  stack: string[]
  result: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
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
  title: string
  subtitle?: string
}

export interface PageSeoContent {
  title: string
  description: string
  ogTitle?: string
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
