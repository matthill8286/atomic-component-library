export interface Feature {
  name: string
  value: string
  unit?: string | null
}

export interface FeatureListProps {
  features?: Feature[] | null
  showCount?: number
  loading?: boolean
}

export interface FeatureListItemProps {
  name: string
  value: string
  unit?: string | null
}
