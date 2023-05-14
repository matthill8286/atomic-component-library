export type StepByStepField = {
  stepText: string
  stepLinkText?: string
  stepLink: string
}

export type StepByStepFieldProps = StepByStepField & {
  index: number
  amountOfSteps: number
  smoothScroll: boolean
  textColor: string
}

export interface StyledStepConnectorProps {
  color: string
  amount: number
}

export interface StyledLineContainerProps {
  index: number
  amount: number
}

export interface StyledStepContainerProps {
  amount: number
}
