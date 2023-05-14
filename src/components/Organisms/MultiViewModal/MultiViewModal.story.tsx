import { Meta, Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'
import { MultiViewModal, MultiViewModalProps } from './MultiViewModal'
import { MultiViewModalProvider, useMultiViewModalAction } from './MultiViewModal.store'
import { MultiViewModalView } from './MultiViewModalView'
import { Button } from '@/components/Atoms/Button'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { Spacer } from '@/components/Atoms/Spacer'
import { FlexBox } from '@/components/Helper'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Design System/Organisms/Multi View Modal',
  component: MultiViewModal,
  args: {
    targetId: 'modal-portal',
  },
  decorators: [
    (Story) => {
      return (
        <MultiViewModalProvider homeViewId="view-1">
          <StoryContainer>
            <Story />
          </StoryContainer>
        </MultiViewModalProvider>
      )
    },
  ],
} as Meta

const StoryContainer = ({ children }): JSX.Element => {
  const { setActive, setView } = useMultiViewModalAction()

  return (
    <>
      <div id="modal-portal" />

      <FlexBox>
        <Button
          onClick={() => {
            setView('view-1')
            setActive(true)
          }}
        >
          Open Modal: view 1
        </Button>

        <Spacer size="sm" direction="vertical" />

        <Button
          actionType="secondary"
          onClick={() => {
            setView('view-2')
            setActive(true)
          }}
        >
          Open Modal: view 2
        </Button>
      </FlexBox>

      {children}
    </>
  )
}

const Template: Story<PropsWithChildren<MultiViewModalProps>> = (args) => (
  <MultiViewModal {...args}>
    <MultiViewModalView id="view-1">
      <CopyText fontSize="md">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </CopyText>
    </MultiViewModalView>

    <MultiViewModalView id="view-2">
      <CopyText fontSize="md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </CopyText>
    </MultiViewModalView>
  </MultiViewModal>
)

export const Default = Template.bind({})
