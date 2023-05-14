import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { renderWithTheme } from '@/testRenderer'
import { Lists } from './Lists'
import { OtherCheckmarkCircle } from '@matthill8286/atomic-icon-library'

describe('Lists', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Lists>
        <li>
          <CopyText>Lorem ipsum</CopyText>
        </li>
      </Lists>,
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly with icon', () => {
    const tree = renderWithTheme(
      <Lists>
        <li>
          <CopyText>
            <Icon color="success" height={24} width={24}>
              <OtherCheckmarkCircle />
              Lorem ipsum
            </Icon>
          </CopyText>
        </li>
      </Lists>,
    )
    expect(tree).toMatchSnapshot()
  })
})
