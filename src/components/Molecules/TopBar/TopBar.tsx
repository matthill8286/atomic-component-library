import * as React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Lists } from '@/components/Atoms/Lists'
import { Section } from '@/components/Atoms/Section'
import { CopyText } from '@/components/Atoms/Typography'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { OtherCheckmark } from '@matthill8286/atomic-icon-library'

interface TopBarProps {
  entries: React.ReactChild[]
}

const StyledLists = styled(Lists)`
  display: flex;
  flex-direction: row;
  z-index: 1;

  > li {
    flex: 1;
    display: none;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.base.xxs} 0;
    margin: 0 ${({ theme }) => theme.spacing.base.xxs};
    overflow: hidden;

    > span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      > p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    &:nth-child(-n + 2) {
      display: flex;
    }

    ${media.lg} {
      &:nth-child(-n + 4) {
        display: flex;
      }
    }
  }
`

const StyledIcon = styled(Icon)`
  svg {
    position: relative;
    top: 5px;
  }
`

const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.header.topBar};
`

export const TopBar: React.FC<TopBarProps> = ({ entries }) => {
  return (
    <StyledSection
      color="white"
      paddingTop={{
        mobile: 'xs',
        tablet: 'xs',
      }}
      paddingBottom={{
        mobile: 'xs',
        tablet: 'xs',
      }}
    >
      <Grid>
        <Row noMargin>
          <Cell colsXs={4} colsSm={8} colsMd={8} colsLg={12} colsXl={12}>
            <StyledLists icon>
              {entries.map((entry, index) => (
                <li key={index}>
                  <StyledIcon height={14} width={14} color="grey5">
                    <OtherCheckmark />
                  </StyledIcon>
                  <CopyText color="grey5" bold fontSize="sm" tag="span">
                    {entry}
                  </CopyText>
                </li>
              ))}
            </StyledLists>
          </Cell>
        </Row>
      </Grid>
    </StyledSection>
  )
}
