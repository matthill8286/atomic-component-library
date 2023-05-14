import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { Cell } from './Cell'
import { Grid } from './Grid'
import Readme from './Grid.readme.md'
import { Row } from './Row'

const Placeholder: React.FC<{
  tint?: boolean
  height?: string | number | (string & unknown) | undefined
}> = ({ tint, height }) => {
  const styles = {
    padding: '1rem',
    background: tint ? '#333' : '#eee',
    minHeight: height ? height : '100px',
  }

  return <div style={styles} />
}
Placeholder.displayName = 'Placeholder'

storiesOf('Design System/Helper/MaterialGrid', module)
  .add(
    '12 column grid',
    () => (
      <Grid>
        <Row>
          {new Array(12).fill(0).map((_, index) => (
            <Cell key={index} columns={1}>
              <Placeholder>Cell {index + 1}</Placeholder>
            </Cell>
          ))}
        </Row>
      </Grid>
    ),
    {
      info: Readme,
    },
  )

  .add(
    'Fixed Column Width',
    () => (
      <Grid fixedColumnWidth>
        <Row>
          {new Array(12).fill(0).map((_, index) => (
            <Cell key={index} columns={1}>
              <Placeholder>Cell {index + 1}</Placeholder>
            </Cell>
          ))}
        </Row>
      </Grid>
    ),
    {
      info: Readme,
    },
  )

  .add('Responsive grid with view port sizes', () => (
    <Grid>
      <Row>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 1</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 2</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={3}>
          <Placeholder>Cell 5</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={3}>
          <Placeholder>Cell 6</Placeholder>
        </Cell>
      </Row>
    </Grid>
  ))

  .add('with custom html tags', () => (
    <Grid tag="section">
      <Row>
        {new Array(3).fill(0).map((_, index) => (
          <Cell key={index} columns={3} tag="article">
            <Placeholder>Cell as article {index + 1}</Placeholder>
          </Cell>
        ))}
      </Row>
    </Grid>
  ))

  .add('Alignment', () => (
    <Grid fixedColumnWidth align="right">
      <Row>
        <Cell align="top">
          <Placeholder>
            <Typo tag="p">Cricket</Typo>
          </Placeholder>
        </Cell>
        <Cell align="middle">
          <Placeholder>Cricket</Placeholder>
        </Cell>
        <Cell align="bottom">
          <Placeholder>StarCraft</Placeholder>
        </Cell>
      </Row>
    </Grid>
  ))

  .add('Justify', () => (
    <Grid fixedColumnWidth>
      <Row>
        <Cell justify="flex-end" columns={3}>
          abc
          <Placeholder>Tennis</Placeholder>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Cell>
        <Cell justify="flex-start" columns={3}>
          cde
          <Placeholder>Cricket</Placeholder>
        </Cell>
        <Cell justify="center" columns={3}>
          fgh
          <Placeholder>Poker</Placeholder>
        </Cell>

        <Cell justify="flex-end" columns={3}>
          ijk
          <Placeholder>Football</Placeholder>
        </Cell>

        <Cell justify="stretch" columns={12}>
          lmn
          <Placeholder>Football</Placeholder>
        </Cell>
      </Row>
    </Grid>
  ))

  .add('Dashboard Example', () => (
    <Grid>
      <Row>
        <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={6}>
          <Placeholder>Header</Placeholder>
        </Cell>
      </Row>

      <Row>
        <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={6}>
          <Placeholder>Headline</Placeholder>
        </Cell>
      </Row>

      <Row>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 1</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 2</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 4</Placeholder>
        </Cell>
      </Row>

      <Row>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 1</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 2</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
      </Row>

      <Row>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 1</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 2</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={3} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsMd={8} colsSm={8}>
          <Placeholder>Cell 3</Placeholder>
        </Cell>
      </Row>
    </Grid>
  ))

  .add('Inner Nesting Row', () => (
    <Row>
      {new Array(3).fill(0).map((_, index) => (
        <Cell key={index} columns={3} tag="article">
          <Placeholder>Cell as article {index + 1}</Placeholder>
        </Cell>
      ))}
    </Row>
  ))

  .add('Hide Column on Smaller Devices Example', () => (
    <Grid>
      <Row>
        <Cell colsXl={9} colsLg={9} colsSm={8} colsMd={8} order={2}>
          <Placeholder>Cell 1</Placeholder>
        </Cell>
        <Cell colsXl={3} colsLg={3} colsXs={0} colsSm={0} colsMd={0} order={1}>
          <Placeholder>Cell 2</Placeholder>
        </Cell>
      </Row>
    </Grid>
  ))

  .add('Text Image Component', () => (
    <div>
      <Row>
        <Cell colsXl={6} colsLg={6} order={2}>
          <Placeholder>Image</Placeholder>
        </Cell>
        <Cell colsXl={6} colsLg={6} order={1}>
          <Placeholder>Text</Placeholder>
        </Cell>
      </Row>
      <Row>
        <Cell colsXl={6} colsLg={6} order={1}>
          <Placeholder>Image</Placeholder>
        </Cell>
        <Cell colsXl={6} colsLg={6} order={2}>
          <Placeholder>Text</Placeholder>
        </Cell>
      </Row>
    </div>
  ))

  .add('No margin for Row', () => (
    <Grid>
      <Row noMargin>
        {new Array(12).fill(0).map((_, index) => (
          <Cell key={index} columns={1}>
            <Placeholder>Cell {index + 1}</Placeholder>
          </Cell>
        ))}
      </Row>
      <Row>
        {new Array(12).fill(0).map((_, index) => (
          <Cell key={index} columns={1}>
            <Placeholder tint>Cell {index + 1}</Placeholder>
          </Cell>
        ))}
      </Row>
    </Grid>
  ))
  .add('No padding for Grid', () => (
    <Grid noPadding>
      <Row>
        {new Array(12).fill(0).map((_, index) => (
          <Cell key={index} columns={1}>
            <Placeholder>Cell {index + 1}</Placeholder>
          </Cell>
        ))}
      </Row>
      <Row>
        {new Array(12).fill(0).map((_, index) => (
          <Cell key={index} columns={1}>
            <Placeholder tint>Cell {index + 1}</Placeholder>
          </Cell>
        ))}
      </Row>
    </Grid>
  ))
