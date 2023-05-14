import * as React from 'react'
import { Heading } from '@/components/Atoms/Typography'
import { TeaserLink } from '../Teasers/Teasers.interface'
import { StyledLink, StyledPicture, StyledTextWrapper, StyledWrapper } from './CampaignInfobox.styled'

export interface CampaignInfoboxProps {
  text: string
  imgUrl?: string
  link?: TeaserLink
  onClick?: (e: React.MouseEvent) => void
}

export const CampaignInfobox: React.FC<CampaignInfoboxProps> = ({
  text,
  imgUrl,
  link,
  onClick,
}: CampaignInfoboxProps) => {
  return (
    <StyledLink to={link?.to} href={link?.href} onClick={onClick} underline={false}>
      <StyledWrapper>
        {imgUrl && <StyledPicture src={imgUrl} objectFit="contain" />}
        <StyledTextWrapper>
          <Heading tag="span" scale="level-5" weight="semibold" limitLines={2} color="grey5">
            {text}
          </Heading>
        </StyledTextWrapper>
      </StyledWrapper>
    </StyledLink>
  )
}
