import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { CopyText } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'
import { ReadMoreLabel, ReadMoreLabelProps } from '@/components/Molecules/ReadMoreLabel/ReadMoreLabel'
import { Checkbox } from '@/components/Atoms/Checkbox/Checkbox'
import { boolean, number, text } from '@storybook/addon-knobs'
import { Filter } from '@/components/Molecules/Filter'

const StyledCopyText = styled(CopyText)`
  margin: 0;
`

const knobs = (): Partial<ReadMoreLabelProps> => {
  return {
    isOpen: boolean('Is Open', false),
    showMoreLabel: text('Show More', 'Show'),
    showLessLabel: text('Show Less', 'Less'),
    collapsedHeight: number('Collapse Height', 40),
  }
}

const baseArgs: Partial<ReadMoreLabelProps> = {
  isOpen: false,
  collapsedHeight: 40,
  htmlFor: 'id',
  showMoreLabel: 'Show More',
  showLessLabel: 'Show Less',
}

const Default = ({ ...args }: ReadMoreLabelProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(!!args.isOpen)

  return (
    <ReadMoreLabel
      {...args}
      isOpen={isOpen}
      onChange={(collapsed) => {
        setIsOpen(!collapsed)
      }}
    >
      <StyledCopyText bold withMargins margin="0">
        Lorem Ipsum is simply dummy text
      </StyledCopyText>
      <StyledCopyText>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </StyledCopyText>
    </ReadMoreLabel>
  )
}

const CheckboxTemplate = ({ ...args }: ReadMoreLabelProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(!!args.isOpen)

  return (
    <ReadMoreLabel
      {...args}
      isOpen={isOpen}
      onChange={(collapsed) => {
        setIsOpen(!collapsed)
      }}
    >
      <StyledCopyText bold withMargins margin="0">
        Lorem Ipsum is simply dummy text
      </StyledCopyText>
      <StyledCopyText>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </StyledCopyText>
    </ReadMoreLabel>
  )
}

const Template = ({ ...args }: ReadMoreLabelProps) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState<boolean>(!!args.isOpen)

  return (
    <Checkbox
      name="checkbox"
      selectableId="selectableId"
      onChangeValue={(checked) => {
        setIsChecked(checked)
      }}
      isChecked={isChecked}
      label={
        <ReadMoreLabel
          {...args}
          isOpen={isOpen}
          onClick={() => {
            setIsChecked(!isChecked)
          }}
          onChange={(collapsed) => {
            setIsOpen(!collapsed)
          }}
        >
          <StyledCopyText bold withMargins margin="0">
            Lorem Ipsum is simply dummy text
          </StyledCopyText>
          <StyledCopyText>
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </StyledCopyText>
        </ReadMoreLabel>
      }
    />
  )
}

storiesOf('Design System/Molecules/Read More Label', module)
  .add('Default', () => (
    <Default htmlFor="id" collapsedHeight={40} showLessLabel={'Show Less'} showMoreLabel={'Show More'} />
  ))
  .add('Template', () => (
    <Template htmlFor="id" collapsedHeight={40} showLessLabel={'Show Less'} showMoreLabel={'Show More'} />
  ))
  .add('Filter Template', () => (
    <CheckboxTemplate htmlFor="id" collapsedHeight={80} showLessLabel={'Show Less'} showMoreLabel={'Show More'} />
  ))
