export interface PageNumberProps {
  item: number
  current: number
  handleClick: (ev: React.MouseEvent, index: number) => void
}

export interface BulletProps {
  max: number
  current: number
  handleClick: (ev: React.MouseEvent, index: number) => void
}

export interface BasePaginationProps {
  max: number
  current: number
}

export interface ProgressOptions {
  progressLabel: string
  buttonLabel: string
  onClickMore: (ev: React.MouseEvent) => void
}

export interface DotsOptions {
  onChange: (ev: React.MouseEvent, index: number) => void
}

export interface PagesOptions {
  onChange: (ev: React.MouseEvent, index: number) => void
}

export interface ProgressPaginationProps extends BasePaginationProps {
  variant: 'progress'
  options: ProgressOptions
}

export interface DotsPaginationProps extends BasePaginationProps {
  variant: 'dots'
  options: DotsOptions
}

export interface PagesPaginationProps extends BasePaginationProps {
  variant: 'pages'
  options: PagesOptions
}

export type PaginationProps = ProgressPaginationProps | DotsPaginationProps | PagesPaginationProps
