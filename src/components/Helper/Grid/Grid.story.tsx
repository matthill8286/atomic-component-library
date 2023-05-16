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

export default {
  title: 'Design System/Helper/MaterialGrid',
}

export const _12ColumnGrid = () => (
  <Grid>
    <Row>
      {new Array(12).fill(0).map((_, index) => (
        <Cell key={index} columns={1}>
          <Placeholder>Cell {index + 1}</Placeholder>
        </Cell>
      ))}
    </Row>
  </Grid>
)

_12ColumnGrid.story = {
  name: '12 column grid',

  parameters: {
    info: Readme,
  },
}

export const FixedColumnWidth = () => (
  <Grid fixedColumnWidth>
    <Row>
      {new Array(12).fill(0).map((_, index) => (
        <Cell key={index} columns={1}>
          <Placeholder>Cell {index + 1}</Placeholder>
        </Cell>
      ))}
    </Row>
  </Grid>
)

FixedColumnWidth.story = {
  parameters: {
    info: Readme,
  },
}

export const ResponsiveGridWithViewPortSizes = () => (
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
)

ResponsiveGridWithViewPortSizes.story = {
  name: 'Responsive grid with view port sizes',
}

export const WithCustomHtmlTags = () => (
  <Grid tag="section">
    <Row>
      {new Array(3).fill(0).map((_, index) => (
        <Cell key={index} columns={3} tag="article">
          <Placeholder>Cell as article {index + 1}</Placeholder>
        </Cell>
      ))}
    </Row>
  </Grid>
)

WithCustomHtmlTags.story = {
  name: 'with custom html tags',
}

export const Alignment = () => (
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
)

export const Justify = () => (
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
)

export const DashboardExample = () => (
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
)

export const InnerNestingRow = () => (
  <Row>
    {new Array(3).fill(0).map((_, index) => (
      <Cell key={index} columns={3} tag="article">
        <Placeholder>Cell as article {index + 1}</Placeholder>
      </Cell>
    ))}
  </Row>
)

export const HideColumnOnSmallerDevicesExample = () => (
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
)

HideColumnOnSmallerDevicesExample.story = {
  name: 'Hide Column on Smaller Devices Example',
}

export const TextImageComponent = () => (
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
)

export const NoMarginForRow = () => (
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
)

NoMarginForRow.story = {
  name: 'No margin for Row',
}

export const NoPaddingForGrid = () => (
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
)

NoPaddingForGrid.story = {
  name: 'No padding for Grid',
}
