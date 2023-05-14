import React from 'react'
import { Card } from '@/components/Atoms/Card'
import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { Padding } from '@/types/theme'
import { NotificationBoxProps, NotificationContentSort, NotificationLink } from './NotificationBox.interface'
import {
  StyledArrow,
  StyledBodyHtml,
  StyledButton,
  StyledButtonDiv,
  StyledCopyTextDiv,
  StyledLinkDiv,
  StyledNotificationboxWrapper,
  StyledNotificationClose,
  StyledNotificationHeadline,
} from './NotificationBoxStyled'
import {
  OtherArrow,
  OtherCheckmarkCircleOutlined,
  OtherClear,
  OtherClearCircleOutlined,
  OtherInfoOutlined,
  OtherSwapHorizontal,
} from '@matthill8286/atomic-icon-library'

export const NotificationBox = React.forwardRef<HTMLDivElement, NotificationBoxProps>(
  (
    {
      body,
      bodyFontSize = 'sm',
      bodyMargin,
      buttonLayout = 'column',
      buttons,
      cardShape = 'rounded-small',
      hasTitleIcon,
      isTitleFontBold = true,
      titleIconSelfAlign,
      isClosable,
      rootPosition,
      maxWidth,
      links,
      onClose,
      title,
      tooltip,
      type,
      sort = NotificationContentSort.LinksButtons,
      alignLinks = 'left',
      ...otherProps
    },
    ref,
  ) => {
    const renderIcon = (type): React.ReactElement => {
      switch (type) {
        case 'info':
          return <OtherInfoOutlined />
        case 'success':
          return <OtherCheckmarkCircleOutlined />
        case 'alert':
          return <OtherInfoOutlined />
        case 'error':
          return <OtherClearCircleOutlined />
        case 'hot':
          return <OtherSwapHorizontal />
        default:
          return <OtherInfoOutlined />
      }
    }

    // Originally "iconLeft" was not settable
    // Thus to ensure backwards compatibility and also allow to set no "iconLeft" to be rendered,
    // null will return undefined and undefined will return a default element.
    const getIconLeft = (iconLeft?: React.ReactElement | null): React.ReactElement | undefined => {
      if (iconLeft === null) return undefined
      if (iconLeft === undefined)
        return (
          <Icon color="primary">
            <OtherArrow />
          </Icon>
        )
      return iconLeft
    }

    const renderLinks = () =>
      Boolean(links?.length) && (
        <StyledLinkDiv alignLinks={alignLinks}>
          {/* TypeScript cannot infer that 'links' cannot be 'undefined' at this point (yet) */}
          {(links as NotificationLink[]).map(({ label, iconLeft, ...linkProps }) => (
            <Link
              iconLeft={getIconLeft(iconLeft)}
              color="white"
              decorationColor="white"
              key={label}
              scale="large"
              {...linkProps}
            >
              {label}
            </Link>
          ))}
        </StyledLinkDiv>
      )

    const arrowPos = tooltip?.arrowPosition.split('-')
    const padding = tooltip ? ({ mobile: 'sm', tablet: 'md', top: 'md' } as Padding) : 'md'

    return (
      <StyledNotificationboxWrapper
        data-test="notification-box"
        tooltip={tooltip}
        type={type}
        rootPosition={rootPosition}
        maxWidth={maxWidth}
        ref={ref}
        {...otherProps}
      >
        <StyledNotificationClose onClick={onClose}>
          <Icon width={16} height={16} color={'white'}>
            {isClosable && <OtherClear />}
          </Icon>
        </StyledNotificationClose>
        {arrowPos && <StyledArrow arrowLeft={tooltip?.arrowleft} arrowPosition={arrowPos} />}
        <Card elevation={1} padding={padding} shape={cardShape} surface="black">
          {title && hasTitleIcon && (
            <StyledNotificationHeadline>
              <Icon width={16} height={16} color="white" alignSelf={titleIconSelfAlign}>
                {renderIcon(type)}
              </Icon>
              <CopyText data-test="notification-box-title" color="white" tag="div" bold={isTitleFontBold}>
                {title}
              </CopyText>
            </StyledNotificationHeadline>
          )}
          {body && (
            <StyledCopyTextDiv margin={bodyMargin}>
              <CopyText data-test="notification-box-body" color="white" fontSize={bodyFontSize} margin={bodyMargin}>
                {
                  <StyledBodyHtml
                    dangerouslySetInnerHTML={{
                      __html: body,
                    }}
                  />
                }
              </CopyText>
            </StyledCopyTextDiv>
          )}

          {sort === NotificationContentSort.LinksButtons && renderLinks()}

          {buttons && buttons.length > 0 && (
            <StyledButtonDiv buttonLayout={buttonLayout}>
              {buttons.map(({ actionBtnLabel, actionType = 'inverted', ...buttonProps }) => (
                <StyledButton actionType={actionType} fullWidth key={actionBtnLabel} size="sm" {...buttonProps}>
                  {actionBtnLabel}
                </StyledButton>
              ))}
            </StyledButtonDiv>
          )}
          {sort === NotificationContentSort.ButtonsLinks && renderLinks()}
        </Card>
      </StyledNotificationboxWrapper>
    )
  },
)
