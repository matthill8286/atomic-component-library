import * as React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Cell, Offset } from './Cell'
import { Grid } from './Grid'
import { Row } from './Row'

describe('MaterialGrid', () => {
  // list of grid components,
  // useful for iterating over common properties in test for each component
  const components = { Grid, Row, Cell, Offset }

  describe('Grid component', () => {
    it('renders a div per default', () => {
      const tree = renderWithTheme(<Grid />)
      expect(tree).toMatchSnapshot()
    })

    it('renders with Rows and Cells (children)', () => {
      const tree = renderWithTheme(
        <Grid>
          <Row>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </Row>
          <Row>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </Row>
        </Grid>,
      )

      expect(tree).toMatchSnapshot()
    })
  })

  describe('Cell component', () => {
    it('renders with custom responsive column count for view ports', () => {
      const tree = renderWithTheme(<Cell colsXs={4} colsSm={8} colsMd={8} colsLg={12} colsXl={12} />)

      expect(tree).toMatchSnapshot()
    })

    it('renders with column order', () => {
      const tree = renderWithTheme(<Cell order={2} />)
      expect(tree).toMatchSnapshot()
    })

    it('renders hidden with view port columns count set to 0', () => {
      const tree = renderWithTheme(<Cell colsXs={0} colsSm={0} colsMd={0} colsLg={0} colsXl={0} />)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('Offset component', () => {
    it('renders with custom responsive column count for view ports', () => {
      const tree = renderWithTheme(<Cell colsXs={4} colsSm={8} colsMd={8} colsLg={12} colsXl={12} />)

      expect(tree).toMatchSnapshot()
    })

    it('renders with column order', () => {
      const tree = renderWithTheme(<Cell order={2} />)
      expect(tree).toMatchSnapshot()
    })

    it('renders hidden with view port columns count set to 0', () => {
      const tree = renderWithTheme(<Cell colsXs={0} colsSm={0} colsMd={0} colsLg={0} colsXl={0} />)

      expect(tree).toMatchSnapshot()
    })

    it('renders hidden with no values, because of default props', () => {
      const tree = renderWithTheme(<Offset />)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('additional customizations', () => {
    describe('with custom tags', () => {
      Object.keys(components).forEach((key) => {
        it(`renders ${key} with custom tag name`, () => {
          const Component = components[key]
          const tagName = 'section'

          const tree = renderWithTheme(<Component tag={tagName} />)
          expect(tree).toMatchSnapshot()
        })
      })
    })
  })
})
