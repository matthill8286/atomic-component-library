import { withState } from '@dump247/storybook-state'
import { ButtonGroup } from './ButtonGroup'
import { BorderedButton } from './ButtonGroup.styled'
import { Button } from '@/components/Atoms/Button'
import { Typo } from '@/components/Atoms/Typography/Typo'
import { styled } from '@/styles/styled'

// const stories = storiesOf('Design System/Molecules/ButtonGroup', module)

export default {
  title: 'Design System/Molecules/ButtonGroup',
  component: ButtonGroup,
}

const voidFn = () => {}
const StyledDivWithTopBorder = styled.div`
  padding-top: 25px;
  position: relative;
  background-color: #fff;
  border-top: 1px solid #000;

  &:after,
  &:before {
    top: -1px;
    left: 7px;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #fff;
    border-width: 8px;
    margin-left: -8px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #000;
    border-width: 9px;
    margin-left: -9px;
  }
`

export const With2Buttons = withState({ value: '1' }, (store) => {
  return (
    <div style={{ padding: '20px' }}>
      <ButtonGroup>
        <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
          Button 1
        </Button>
        <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
          Button 2
        </Button>
      </ButtonGroup>
    </div>
  )
})

export const With3Buttons = withState({ value: '1' }, (store) => {
  return (
    <div style={{ padding: '20px' }}>
      <ButtonGroup>
        <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
          Button 1
        </Button>
        <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
          Button 2
        </Button>
        <Button actionType="outlined" onClick={voidFn} size="sm" type="button">
          Button 3
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button actionType="secondary" onClick={voidFn} size="sm" type="button">
          Button 1
        </Button>
        <Button actionType="secondary" onClick={voidFn} size="sm" type="button">
          Button 2
        </Button>
        <Button actionType="secondary" onClick={voidFn} size="sm" type="button">
          Button 3
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button actionType="prominent" onClick={voidFn} size="sm" type="button">
          Button 1
        </Button>
        <Button actionType="prominent" onClick={voidFn} size="sm" type="button">
          Button 2
        </Button>
        <Button actionType="prominent" onClick={voidFn} size="sm" type="button">
          Button 3
        </Button>
      </ButtonGroup>
    </div>
  )
})

export const Example1DeliverySlots = withState({ value: '0' }, (store) => {
  return (
    <div style={{ padding: '20px' }}>
      <StyledDivWithTopBorder>
        <Typo tag="div" fontSize="xs" weight="bold" style={{ marginBottom: '7px' }}>
          Escoge el día y hora que desees:
        </Typo>
        <Typo tag="div" fontSize="xs" weight="regular" style={{ marginBottom: '4px' }}>
          Jueves 24.09
        </Typo>
        <ButtonGroup>
          <BorderedButton type="button" selected={store.state.value === '1'} onClick={() => store.set({ value: '1' })}>
            <Typo tag="span" fontSize="xxs" weight="regular">
              07—12h
            </Typo>
          </BorderedButton>
          <BorderedButton type="button" selected={store.state.value === '2'} onClick={() => store.set({ value: '2' })}>
            <Typo tag="span" fontSize="xxs" weight="regular">
              12—17h
            </Typo>
          </BorderedButton>
          <BorderedButton type="button" selected={store.state.value === '3'} onClick={() => store.set({ value: '3' })}>
            <Typo tag="div" fontSize="xxs" weight="regular">
              17—22h
            </Typo>
            <Typo tag="strong" fontSize="xxs" weight="bold">
              69,90 €
            </Typo>
          </BorderedButton>
        </ButtonGroup>
        <Typo tag="div" fontSize="xs" weight="regular" style={{ marginTop: '12px', marginBottom: '4px' }}>
          Viernes 25.09
        </Typo>
        <ButtonGroup>
          <BorderedButton type="button" selected={store.state.value === '4'} onClick={() => store.set({ value: '4' })}>
            <Typo tag="span" fontSize="xxs" weight="regular">
              12—17h
            </Typo>
          </BorderedButton>
          <BorderedButton type="button" selected={store.state.value === '5'} onClick={() => store.set({ value: '5' })}>
            <Typo tag="div" fontSize="xxs" weight="regular">
              17—22h
            </Typo>
            <Typo tag="strong" fontSize="xxs" weight="bold">
              69,90 €
            </Typo>
          </BorderedButton>
        </ButtonGroup>
      </StyledDivWithTopBorder>
    </div>
  )
})

Example1DeliverySlots.story = {
  name: 'Example #1 - Delivery slots',
}
