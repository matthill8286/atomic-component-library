import * as React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Modal } from './Modal'

describe('Modal', () => {
  const ModalContent = 'Modal'

  it('Should render a Modal', () => {
    const tree = renderWithTheme(<Modal>{ModalContent}</Modal>)
    expect(tree).toMatchSnapshot()
  })
  it('Should render a Modal with size', () => {
    const tree = renderWithTheme(<Modal size="lg">{ModalContent}</Modal>)
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Modal with two buttons', () => {
    const tree = renderWithTheme(
      <Modal
        primaryButtonProps={{
          buttonLabel: 'Call to action',
          onClick: jest.fn(),
        }}
        secondaryButtonProps={{
          buttonLabel: 'Schließen',
          onClick: jest.fn(),
        }}
        size="lg"
      >
        {ModalContent}
      </Modal>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render the title', () => {
    const title = 'Lorem Title'
    const tree = mountWithTheme(<Modal title={title}>{ModalContent}</Modal>)
    expect(tree.text()).toContain(title)
  })

  describe('Close Button in Header', () => {
    it('is rendered by default', () => {
      const tree = mountWithTheme(<Modal>{ModalContent}</Modal>)
      expect(tree.find('[data-test="modal-close-button"]').length).toBeGreaterThan(0)
    })
    it('is not rendered if hideCloseButton is passed', () => {
      const tree = mountWithTheme(<Modal hideCloseButton={true}>{ModalContent}</Modal>)
      expect(tree.find('[data-test="modal-close-button"]')).toHaveLength(0)
    })
  })
})
