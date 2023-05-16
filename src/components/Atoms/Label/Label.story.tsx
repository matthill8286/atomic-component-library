import { Label } from './Label'
import Readme from './Label.readme.mdx'

// const stories = storiesOf('Design System/Atoms/Label', module)

export default {
  title: 'Design System/Atoms/Label',
  component: Label,
}

const options = { info: Readme }

export const Default = () => <Label htmlFor="field-1">A label</Label>

Default.story = {
  parameters: options,
}
