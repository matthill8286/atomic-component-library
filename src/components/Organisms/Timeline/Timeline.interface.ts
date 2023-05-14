export interface TimelineItem {
  id: string
  title?: string | React.ReactNode
  description: string | React.ReactNode
  icon: React.ReactNode
}

export type TimelineItems = TimelineItem[]

export interface TimelineProps {
  headline?: string
  items: TimelineItems
}
