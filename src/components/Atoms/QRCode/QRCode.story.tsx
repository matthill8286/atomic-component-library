import * as React from 'react'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { QRCodeGenerator } from './QRCode'
import { ErrorLevel, RenderAs } from './QRCode.interface'

export default {
  title: 'Design System/Atoms/QRCode',
}

export const Default = () => {
  return (
    <StorybookWrapper>
      <QRCodeGenerator value="9802149999997839" />
    </StorybookWrapper>
  )
}

export const RenderAsCanvas = () => {
  return (
    <StorybookWrapper>
      <QRCodeGenerator value="9802149999997839" renderAs={RenderAs.CANVAS} />
    </StorybookWrapper>
  )
}

RenderAsCanvas.story = {
  name: 'Render as Canvas',
}

export const CustomizedSize = () => {
  return (
    <StorybookWrapper>
      <QRCodeGenerator value="9802149999997839" size={256} />
    </StorybookWrapper>
  )
}

export const WithError = () => {
  return (
    <StorybookWrapper>
      <QRCodeGenerator value="9802149999997839" errorLevel={ErrorLevel.HIGH} />
    </StorybookWrapper>
  )
}

export const WithMargin = () => {
  return (
    <StorybookWrapper>
      <QRCodeGenerator value="9802149999997839" includeMargin />
    </StorybookWrapper>
  )
}
