import { action } from '@storybook/addon-actions'
import { Pagination } from './Pagination'

export default {
  title: 'Design System/Molecules/Pagination',
}

export const Progress = () => {
  const options = {
    onClickMore: action('onClickMore'),
    buttonLabel: 'Mehr laden',
    progressLabel: 'Sie haben 600 von 1200 gesehen',
  }
  return <Pagination max={1200} current={600} variant={'progress'} options={options} />
}

export const Dots = () => {
  const options = {
    onChange: action('onChange'),
  }
  return (
    <div>
      <Pagination variant={'dots'} max={3} current={0} options={options} />
      &nbsp;
      <Pagination variant={'dots'} max={6} current={3} options={options} />
    </div>
  )
}

export const Pages = () => {
  const options = {
    onChange: action('onChange'),
  }
  return (
    <div>
      <Pagination variant={'pages'} max={100} current={0} options={options} />
    </div>
  )
}
