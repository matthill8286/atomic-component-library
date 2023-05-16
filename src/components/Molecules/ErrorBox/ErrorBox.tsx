import React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Card } from '@/components/Atoms/Card'
import { Icon } from '@/components/Atoms/Icon'
import { FlexBox } from '@/components/Helper/FlexBox'
import { FlexItem } from '@/components/Helper/FlexBox'
import { BoxHeading, BoxSubtitle, InfoHost } from '@/components/Molecules/ErrorBox/ErrorBox.styled'
import { OtherClearCircleOutlined } from 'atomic-icon-library'
import { ErrorBoxProps } from './ErrorBox.interface'

export const ErrorBox: React.FC<ErrorBoxProps> = ({ title, subtitle, buttonLabel, onClick, isLoading }) => {
  return (
    <Card elevation={0} overflow="hidden" padding="md" shape="rounded-small" surface="white">
      <FlexBox>
        <FlexItem>
          <Icon color="grey6">
            <OtherClearCircleOutlined />
          </Icon>
        </FlexItem>
        <FlexItem>
          <InfoHost>
            <BoxHeading bold color="grey6" fontFamily="default" margin="" scale="level-4" tag="h1">
              {title}
            </BoxHeading>
            <BoxSubtitle>{subtitle}</BoxSubtitle>
            <Button
              onClick={(e: React.MouseEvent<HTMLElement>) => (onClick ? onClick(e) : null)}
              isLoading={isLoading}
              actionType="primary"
            >
              {buttonLabel}
            </Button>
          </InfoHost>
        </FlexItem>
      </FlexBox>
    </Card>
  )
}

ErrorBox.displayName = 'ErrorBox'
