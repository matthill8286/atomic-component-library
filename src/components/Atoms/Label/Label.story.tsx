import { Label } from './Label'
import Readme from './Label.readme.md'

// const stories = storiesOf('Design System/Atoms/Label', module)
const options = { info: Readme }

export const Default = () => <Label htmlFor="field-1">A label</Label>

Default.story = {
  parameters: options,
}
