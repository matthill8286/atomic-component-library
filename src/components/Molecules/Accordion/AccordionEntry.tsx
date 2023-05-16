import React from 'react'
import { Foldable } from '@/components/Atoms/Foldable'
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface'
import { ThemeColors, ThemeFontSizes } from '@/types'
import { AccordionEntryProps } from './Accordion.interface'
import {
  StyledAccordionEntry,
  StyledEntryContent,
  StyledIcon,
  StyledLabel,
  StyledLabelHeading,
} from './Accordion.styled'
import { OtherRemove, OtherAdd } from 'atomic-icon-library'

const toggleEntry = (id: string, onChange: (id: string) => void): void => {
  onChange(id)
}

export const AccordionEntry: React.FC<AccordionEntryProps> = ({
  title,
  details,
  id,
  onChange,
  customLabelHeading = {
    tag: 'div',
    fontSize: 'sm',
    bold: 'bold',
    margin: '0 sm',
    color: 'grey5',
  },
  labelPadding,
  entryPadding,
  isOpen = false,
  looksOpenInitiallyFromBreakpoint,
  isLarge = false,
  noBorderTop = false,
  withIconsOnRight = true,
  withCustomIcon,
  customIcon,
}) => {
  return (
    <StyledAccordionEntry
      id={id}
      noBorder={noBorderTop}
      className={isOpen ? 'ewb-accordion-open' : 'ewb-accordion-closed'}
    >
      <StyledLabel
        data-test={'accordion-header'}
        padding={labelPadding}
        isLarge={isLarge}
        withIconsOnRight={withIconsOnRight}
        onClick={() => toggleEntry(id, onChange)}
      >
        <StyledIcon width={isLarge ? 28 : 24} height={isLarge ? 28 : 24} rotate={withCustomIcon && isOpen ? -90 : 90}>
          {!withCustomIcon ? isOpen ? <OtherRemove /> : <OtherAdd /> : customIcon}
        </StyledIcon>
        {title && (
          <StyledLabelHeading
            tag={customLabelHeading.tag as keyof JSX.IntrinsicElements}
            fontSize={customLabelHeading.size as ThemeFontSizes | FontSizeMap}
            color={customLabelHeading.color as ThemeColors}
            margin={customLabelHeading.margin}
            isLarge={isLarge}
            weight={customLabelHeading.bold}
            withoutIconSpace
            limitLines={2}
          >
            {title}
          </StyledLabelHeading>
        )}
      </StyledLabel>
      <Foldable isOpen={isOpen} looksOpenInitiallyFromBreakpoint={looksOpenInitiallyFromBreakpoint}>
        <StyledEntryContent tag="div" isLarge={isLarge} padding={entryPadding}>
          {details}
        </StyledEntryContent>
      </Foldable>
    </StyledAccordionEntry>
  )
}
