import * as React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Heading } from '@/components/Atoms/Typography'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { styled } from '@/styles/styled'

const StyledCookieWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.dimension.elevationLevel2};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base.sm};
  background: ${({ theme }) => theme.color.white};
  z-index: 200;
  box-sizing: border-box;

  & a {
    color: ${({ theme }) => theme.color.grey5};

    :hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`

interface CookieLayerProps {
  headline: string
  infoText: string
  button: string
  onCookieLayerAgree?: () => unknown
}

export const CookieLayer: React.FC<CookieLayerProps> = ({
  headline,
  infoText,
  button,
  onCookieLayerAgree,
  ...otherProps
}) => {
  return (
    <StyledCookieWrapper {...otherProps}>
      <Grid>
        <Row>
          <Cell columns={12}>
            <Heading scale="level-3" tag="h2">
              {headline}
            </Heading>
            <CopyText fontSize="xs" withMargins dangerouslySetInnerHTML={{ __html: infoText }} />
            <Button actionType="primary" onClick={onCookieLayerAgree}>
              {button}
            </Button>
          </Cell>
        </Row>
      </Grid>
    </StyledCookieWrapper>
  )
}
