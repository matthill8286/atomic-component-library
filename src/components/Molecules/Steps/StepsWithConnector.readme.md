## Steps with icon

We can use a custom connector between the steps.

```jsx
import { StepConnectorRoot } from './StepConnector'
import { StepConnectorProps, StepConnectorLineProps } from './Steps.interface'

const CustomConnectorLine =
  styled.span <
  StepConnectorLineProps >
  `
    border-color: ${({ theme, color = 'primary', active, completed, elementPosition = 'default' }) =>
      completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.grey2};
    border-style: solid;
    border-top-width: ${({ borderWidth }) => borderWidth};
    border-bottom-width: ${({ borderWidth }) => borderWidth};
    border-radius: ${({ theme }) => theme.dimension.borderRadius1};
    display: block;
`

const CustomConnector: FC<StepConnectorProps> = (props) => (
  <StepConnectorRoot {...props}>
    <CustomConnectorLine {...props} borderWidth={props.variant === 'simple' ? '2px' : '4px'} />
  </StepConnectorRoot>
)
```
