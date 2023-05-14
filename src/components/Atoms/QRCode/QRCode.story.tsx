import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { QRCodeGenerator } from './QRCode'
import { ErrorLevel, RenderAs } from './QRCode.interface'

storiesOf('Design System/Atoms/QRCode', module)
  .add('Default', () => {
    return (
      <StorybookWrapper>
        <QRCodeGenerator value="9802149999997839" />
      </StorybookWrapper>
    )
  })
  .add('Render as Canvas', () => {
    return (
      <StorybookWrapper>
        <QRCodeGenerator value="9802149999997839" renderAs={RenderAs.CANVAS} />
      </StorybookWrapper>
    )
  })
  .add('Customized Size', () => {
    return (
      <StorybookWrapper>
        <QRCodeGenerator value="9802149999997839" size={256} />
      </StorybookWrapper>
    )
  })
  .add('With Error', () => {
    return (
      <StorybookWrapper>
        <QRCodeGenerator value="9802149999997839" errorLevel={ErrorLevel.HIGH} />
      </StorybookWrapper>
    )
  })
  .add('With Margin', () => {
    return (
      <StorybookWrapper>
        <QRCodeGenerator value="9802149999997839" includeMargin />
      </StorybookWrapper>
    )
  })
