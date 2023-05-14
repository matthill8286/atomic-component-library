import { Typo } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: #eee;
  border-radius: 3px;
  margin: 0 0.5rem 0.5rem 0;
  line-height: 1;
`

export const StyledLabel1 = styled(Typo)`
  color: lightgrey;
  margin-bottom: 10px;
  font-family: 'Courier New';
`

export const StyledLabel2 = styled(Typo)`
  width: fit-content;
  color: lightgrey;
  font-family: 'Courier New';
  margin-top: 10px;
  background-color: #fcf9ed;
  ::selection {
    color: #fff;
    background: #eab;
  }
  user-select: all;
`
