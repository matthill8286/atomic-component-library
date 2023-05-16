import { mount } from 'enzyme'
import React from 'react'
import { Portal } from './Portal'

describe('Portal', () => {
  // eslint-disable-next-line no-console
  beforeAll(() => (console.error = jest.fn()))
  it('should render without crashing', () => {
    const Wrapper: React.FC<{ showPortal: boolean }> = ({ showPortal }) => (
      <div>
        <div id="target-element">
          <p>Some Content</p>
        </div>
        {showPortal && (
          <>
            <Portal targetRootId="target-element">
              <p>Portal Content</p>
            </Portal>
          </>
        )}
      </div>
    )

    const tree = mount(<Wrapper showPortal={false} />, { attachTo: document.body })

    expect(tree.text()).toContain('Some Content')
    tree.setProps({ showPortal: true })
    expect(tree.text()).toContain('Portal Content')
  })
})
