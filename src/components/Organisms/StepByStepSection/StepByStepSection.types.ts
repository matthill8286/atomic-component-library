import { StepByStepField } from './elements/StepElement/StepElement.types'

export enum ColorStyle {
  PRIMARY = 'Coloured Background',
  GREY = 'Grey Background',
  CYAN = 'Cyan Background (Saturn only!)',
}

export type StepByStepProps = {
  background: string
  headline: string
  copyText: string
  anchorId?: string | null
  fields: StepByStepField[]
}

export interface StyledSectionProps {
  colorStyle: string
}
