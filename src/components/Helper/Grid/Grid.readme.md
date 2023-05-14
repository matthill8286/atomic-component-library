A styled-components reimlementation of [React Layout Grid](https://github.com/material-components/material-components-web-react/tree/master/packages/layout-grid)
which is an implementation of [MDC Layout Grid](https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid).

Just like Layout Grid from Material design but with extra Offset component and
additional media queries to support different gaps & margins definitions provided by saiyan UX team.

## Usage

```js
import React from 'react'
import { Cell, Grid, Row } from '@saiyan/webmobile-sc-components'

class MyApp extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={4}>Tennis</Cell>
          <Cell columns={4}>Cricket</Cell>
          <Cell columns={4}>StarCraft</Cell>
        </Row>
        <Row>
          <Cell colsXl={4} colsLg={4} order={2} colsXs={4} colsSm={4} colsMd={4}>
            Tennis
          </Cell>
          <Cell colsXl={4} colsLg={4} order={3} colsXs={4} colsSm={4} colsMd={4}>
            Cricket
          </Cell>
          <Cell colsXl={4} colsLg={4} order={1} colsXs={4} colsSm={4} colsMd={4}>
            StarCraft
          </Cell>
        </Row>
        <Row>
          <Cell columns={4}>
            <Row>
              <Cell colsXl={8} colsLg={8} colsXs={2} colsSm={5} colsMd={5}>
                Tennis
              </Cell>
              <Cell colsXl={4} colsLg={4} colsXs={2} colsSm={3} colsMd={3}>
                Cricket
              </Cell>
            </Row>
          </Cell>
          <Cell columns={4}> - </Cell>
          <Cell columns={4}> - </Cell>
        </Row>
      </Grid>
    )
  }
}

// with alignment
class MyAppAligned extends React.Component {
  render() {
    return (
      <Grid align="right">
        <Row>
          <Cell align="top">
            Tennis
            <br />
            <br />
            <br />
            <br />
            <br />
          </Cell>
          <Cell align="middle">Cricket</Cell>
          <Cell align="bottom">StarCraft</Cell>
        </Row>
      </Grid>
    )
  }
}
```

## Components

### Grid

#### Props

| Prop Name          | Type                       | Description                                                             |
| ------------------ | -------------------------- | ----------------------------------------------------------------------- |
| `align`            | String (`left` or `right`) | An optional alignment of the grid contents                              |
| `children`         | Node                       | A React node to render within the Grid, usually a `Row` or `Row`s       |
| `tag`              | String                     | The tag type to render (default `'div'`)                                |
| `fixedColumnWidth` | Boolean                    | Set the width of the grid and therefore of the columns to a fixed value |

### Row

#### Props

| Prop Name  | Type    | Description                                                        |
| ---------- | ------- | ------------------------------------------------------------------ |
| `children` | Node    | A React node to render within the Row, usually a `Cell` or `Cell`s |
| `tag`      | String  | The tag type to render (default `'div'`)                           |
| `noMargin` | boolean | Render the row without margin bottom                               |

### Cell

#### Props

| Prop Name  | Type                                 | Description                                |
| ---------- | ------------------------------------ | ------------------------------------------ |
| `align`    | String (`bottom`, `middle` or `top`) | An optional alignment of the cell contents |
| `children` | Node                                 | A React node to render within the Cell     |
| `columns`  | Number (1-12)                        | The width of the cell on all devices       |
| `colsXs`   | Number (0-4)                         | The width of the cell in XS breakpoint     |
| `colsSm`   | Number (0-8)                         | The width of the cell in SM breakpoint     |
| `colsMd`   | Number (0-8)                         | The width of the cell in MD breakpoint     |
| `colsLg`   | Number (0-12)                        | The width of the cell in LG breakpoint     |
| `colsXl`   | Number (0-12)                        | The width of the cell in XL breakpoint     |
| `order`    | Number (1-12)                        | The order that the cell is displayed in    |
| `tag`      | String                               | The tag type to render (default `'div'`)   |
