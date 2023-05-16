import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Accordion } from './Accordion'

const ENTRIES_1 = [
  {
    title: 'Produktbewertungen',
    id: 'ratings',
    details: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam`,
  },
  {
    title: 'Technische Daten',
    id: 'technicals',
    details: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam`,
    isOpenInitially: true,
  },
  {
    title: 'Produktbeschreibung',
    id: 'description',
    details: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam`,
  },
  {
    title: 'ProduktbeschreibungProduktbeschreibungProduktbeschreibungProduktbeschreibung',
    id: 'production-2',
    details: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam`,
  },
]

describe('Accordion', () => {
  it('renders accordion with initial open entry correctly', () => {
    const tree = renderWithTheme(<Accordion entries={ENTRIES_1} />)
    expect(tree).toMatchSnapshot()
  })
  it('can render all entries open dependant on breakpoint', () => {
    const tree = renderWithTheme(<Accordion isExpandedFrom="sm" entries={ENTRIES_1} />)
    expect(tree).toMatchSnapshot()
  })
  it('has a large variant', () => {
    const tree = renderWithTheme(<Accordion isLarge entries={ENTRIES_1} />)
    expect(tree).toMatchSnapshot()
  })

  it('should not render heading h2 element when title undefined', () => {
    const wrapper = mountWithTheme(<Accordion isLarge entries={ENTRIES_1.map((e) => ({ ...e, title: undefined }))} />)
    expect(wrapper.find('h2')).toHaveLength(0)
  })
})
