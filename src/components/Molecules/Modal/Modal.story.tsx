import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Card } from '@/components/Atoms/Card'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { ModalButtonGroupAlignment } from '@/components/Molecules/ModalButtonGroup'
import { Modal } from './Modal'
import { ModalPaddingSize, ModalPosition, ModalProps, ModalSize } from './Modal.interface'
import Readme from './Modal.readme.md'

export const sizes: ModalSize[] = ['lg', 'md', 'sm']
export const positions: ModalPosition[] = ['top', 'center', 'bottom', 'confirm']
export const types: ModalButtonGroupAlignment[] = ['space-between', 'right', 'center']
export const paddingSizes: ModalPaddingSize[] = ['md', 'lg']
export const animations = [
  'fadeIn',
  'newspaper',
  'slideFromRight',
  'shake',
  'falling',
  'slideFromBottom',
  'superScaled',
]

const Image = () => {
  return <img alt="story-image" src="https://webkit.org/demos/srcset/image-src.png" />
}

const Text = () => {
  return (
    <CopyText fontSize="md">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
      duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
      ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </CopyText>
  )
}

const modalKnobs = (): Partial<ModalProps> => {
  return {
    size: select('Size', sizes, sizes[0]),
    position: select('Position', positions, positions[0]),
    title: text('Title', 'Modal'),
    buttonAlignment: select('Button type', types, types[0]),
    showButtonSeparator: boolean('With Button Seperator', true),
    paddingSize: select('Padding', paddingSizes, paddingSizes[0]),
    withScrollableContent: boolean('Scrollable content', false),
    isWhite: boolean('White background', false),
    hideCloseButton: boolean('Hide close', false),
    animation: select('Animation', animations, animations[0]),
  }
}

const modalKnobsWithTitle = (): Partial<ModalProps> => {
  return {
    ...modalKnobs(),
    title: text('Title', 'Modal'),
  }
}

storiesOf('Design System/Molecules/Modals/Modal', module)
  .add(
    'Default',
    withState({ isModalOpen: true }, (store) => {
      const setModal = (toggle: boolean) => {
        store.set({ isModalOpen: toggle })
      }
      return (
        <React.Fragment>
          <Button actionType="primary" onClick={() => setModal(true)}>
            Open Modal
          </Button>
          {store.state.isModalOpen && (
            <Modal {...modalKnobsWithTitle()} onClose={() => setModal(false)}>
              <Image />
            </Modal>
          )}
        </React.Fragment>
      )
    }),
    { info: Readme },
  )
  .add(
    'With very long content',
    withState({ isModalOpen: true }, (store) => {
      const setModal = (toggle: boolean) => {
        store.set({ isModalOpen: toggle })
      }
      return (
        <React.Fragment>
          <Button actionType="primary" onClick={() => setModal(true)}>
            Open Modal
          </Button>
          {store.state.isModalOpen && (
            <Modal {...modalKnobsWithTitle()} onClose={() => setModal(false)}>
              <Image />
              <Text />
              <Image />
              <Text />
            </Modal>
          )}
        </React.Fragment>
      )
    }),
    { info: Readme },
  )
  .add(
    'With two buttons.',
    () => {
      return (
        <Modal
          {...modalKnobsWithTitle()}
          primaryButtonProps={{
            buttonLabel: 'Call to action',
            actionType: 'primary',
            onClick: action('onClick call to action'),
          }}
          secondaryButtonProps={{
            buttonLabel: 'Close',
            actionType: 'outlined',
            onClick: action('onClick close'),
          }}
          onClose={action('onClick close cross')}
        >
          <img src="https://webkit.org/demos/srcset/image-src.png" />
        </Modal>
      )
    },
    { info: Readme },
  )
  .add(
    'With single call to action',
    () => {
      return (
        <Modal
          {...modalKnobsWithTitle()}
          primaryButtonProps={{
            buttonLabel: 'Call to action',
            actionType: 'primary',
            onClick: action('onClick call to action'),
          }}
          onClose={action('onClick')}
        >
          <Image />
        </Modal>
      )
    },
    { info: Readme },
  )
  .add(
    'href button link',
    () => {
      return (
        <Modal
          {...modalKnobsWithTitle()}
          primaryButtonProps={{
            buttonLabel: 'href btn',
            href: 'test.html',
          }}
          onClose={action('onClick')}
        >
          <Image />
        </Modal>
      )
    },
    { info: Readme },
  )
  .add(
    'with component title',
    () => {
      return (
        <Modal
          {...modalKnobs()}
          title={
            <>
              <Card elevation={0} padding="md" shape="rounded-small" margin={{ top: 'xs', bottom: 'sm' }}>
                <CopyText>
                  This is a component, which is rendered before the heading and the content of the modal and is not
                  influenced by the isDisabled-prop.
                </CopyText>
              </Card>
              <Heading scale="level-4">Modal title</Heading>
            </>
          }
          onClose={action('onClick')}
        >
          <Image />
        </Modal>
      )
    },
    { info: Readme },
  )
