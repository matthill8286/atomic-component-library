import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Card } from '@/components/Atoms/Card'
import { Link } from '@/components/Atoms/Link'
import { Picture } from '@/components/Atoms/Picture'
import { Section } from '@/components/Atoms/Section'
import { Heading } from '@/components/Atoms/Typography'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import readme from './CategoryTile.readme.md'

const mockCategories = [
  {
    link: 'https://www.mediamarkt.de/de/category/_smartphones-464028.html',
    image: 'https://images.prismic.io/mms-1-dev/34e0b674-ef06-4f72-a25b-41feeeed3b96_7.png?auto=compress,format',
    title: 'TV',
  },
  {
    link: 'https://www.mediamarkt.de/de/category/_smartphones-464028.html',
    image: 'https://images.prismic.io/mms-1-dev/34e0b674-ef06-4f72-a25b-41feeeed3b96_7.png?auto=compress,format',
    title: 'TV',
  },
  {
    link: 'https://www.mediamarkt.de/de/category/_smartphones-464028.html',
    image: 'https://images.prismic.io/mms-1-dev/34e0b674-ef06-4f72-a25b-41feeeed3b96_7.png?auto=compress,format',
    title: 'TV',
  },
]

export default {
  title: 'Design System/Organisms/Category Tile',
}

export const CategoryTile: React.FC = () => {
  return (
    <Section
      color={select('Section Background', ['white', 'grey1', 'black', 'primary'], 'white')}
      paddingBottom={{
        mobile: 'lg',
        tablet: 'xl',
      }}
      paddingTop={{
        mobile: 'lg',
        tablet: 'xl',
      }}
    >
      <Grid>
        <Row>
          {mockCategories.map((category) => {
            return (
              <Cell key={1} columns={2}>
                <Link href={category.link} underline={false}>
                  <Card
                    elevation={0}
                    elevationHover={2}
                    padding="sm"
                    center
                    surface={select('Card Surface', ['white', 'grey', 'black', 'primary'], 'white')}
                  >
                    <Picture src={category.image} />
                    <Heading scale="level-4" tag="h3">
                      {category.title}
                    </Heading>
                  </Card>
                </Link>
              </Cell>
            )
          })}
        </Row>
      </Grid>
    </Section>
  )
}

// storiesOf('Design System/Organisms/Category Tile', module).add(
//   'Default',
//   () => {
//     return (
//       <Section
//         color={select('Section Background', ['white', 'grey1', 'black', 'primary'], 'white')}
//         paddingBottom={{
//           mobile: 'lg',
//           tablet: 'xl',
//         }}
//         paddingTop={{
//           mobile: 'lg',
//           tablet: 'xl',
//         }}>
//         <Grid>
//           <Row>
//             {mockCategories.map(category => {
//               return (
//                 <Cell key={1} columns={2}>
//                   <Link href={category.link} underline={false}>
//                     <Card
//                       elevation={0}
//                       elevationHover={2}
//                       padding="sm"
//                       center
//                       surface={select(
//                         'Card Surface',
//                         ['white', 'grey', 'black', 'primary'],
//                         'white'
//                       )}>
//                       <Picture src={category.image} />
//                       <Heading scale="level-4" tag="h3">
//                         {category.title}
//                       </Heading>
//                     </Card>
//                   </Link>
//                 </Cell>
//               )
//             })}
//           </Row>
//         </Grid>
//       </Section>
//     )
//   },
//   { info: readme }
// )
