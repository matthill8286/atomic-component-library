## Steps

Steps display progress through numbered steps. It provides a wizard-like workflow.

#### API

To control the `Steps` we can se the `activeStep` and the `completedStep`.

There are 2 variants: `prominent` and `simple`.

It follows the `ThemeColors` with the `color` prop.

`onChange` prop will be called when a Step is clicked and it will get the index as argoument.

#### Step

We need to pass `title` and `description?` props, all the other props of the `Step` are implicitly passed from the `Steps` component.

We can change the connector component, a custom StepConnector component can be passed to the `Steps.connector` prop.

The `Step` component will receive automatically the `CustomStepConnector` from the Steps component.

Description hides when `media.maxMd`.
