import { withState } from '@dump247/storybook-state'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import uniqueId from 'lodash/uniqueId'
import React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Accordion } from './Accordion'
import { AccordionEntryObject, AccordionProps } from './Accordion.interface'
import Readme from './Accordion.readme.md'

const ENTRIES_1 = [
  {
    title: 'Recommendations',
    id: 'recommendations',
    details: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam`,
  },
  {
    title: 'Long Product Content',
    id: 'technicals',
    details: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam`.repeat(10),
  },
  {
    title: 'Product Description',
    id: 'description',
    details: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam`,
  },
  {
    title: 'Recommendations '.repeat(2),
    id: 'recommendations-2',
    details: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam`,
  },
]

const searchEntriesProps: AccordionProps = {
  customLabelHeading: {
    bold: 'bold',
    size: 'xl',
    tag: 'span',
    margin: '0',
  },
  entries: [
    {
      noBorderTop: true,
      details: '<Section />',
      title: 'Dashboard',
      isOpenInitially: true,
      id: 'section-dashboard',
    },
    {
      noBorderTop: false,
      details: '<Section />',
      title: 'Recommendations',
      isOpenInitially: true,
      id: 'section-reco',
    },
  ],
  entryPadding: 'xs 0 sm 0',
  isUnfoldable: true,
  withIconsOnRight: true,
}

storiesOf('Design System/Molecules/Accordion', module)
  .add(
    'default',
    () => (
      <Accordion
        entries={ENTRIES_1}
        isLarge={boolean('isLarge', false)}
        withIconsOnRight={boolean('Icons on right', true)}
      />
    ),
    {
      info: Readme,
    },
  )
  .add(
    'with custom heading',
    () => (
      <Accordion
        entries={ENTRIES_1}
        isLarge={boolean('isLarge', false)}
        customLabelHeading={{
          tag: 'h2',
          size: 'lg',
          bold: 'bold',
          margin: select('label margin', ['', '0', 'xl', 'xl 0', 'md xl xxl xl', 'sm', '0'], 'sm'),
        }}
      />
    ),
    {
      info: Readme,
    },
  )
  .add(
    'without heading titles',
    () => (
      <Accordion
        entries={ENTRIES_1.map((e) => ({ ...e, title: undefined, noBorderTop: false }))}
        isLarge={boolean('isLarge', false)}
        customLabelHeading={{
          tag: 'h2',
          size: 'lg',
          bold: 'bold',
          margin: select('label margin', ['', '0', 'xl', 'xl 0', 'md xl xxl xl', '0'], '0'),
        }}
      />
    ),
    {
      info: Readme,
    },
  )
  .add(
    'with custom entry and label padding',
    () => (
      <Accordion
        entries={ENTRIES_1.map((e, i) => (i === 2 ? { ...e, isOpenInitially: true } : e))}
        isLarge={boolean('isLarge', false)}
        labelPadding={select('label padding', ['', '0', 'xl', 'xl 0', 'md xl xxl xl', '0'], '')}
        entryPadding={select('entry padding', ['', '0', 'lg', 'xl', 'xl 0', 'md xl xxl xl', '0'], 'md xl xxl xl')}
        customLabelHeading={{
          tag: 'h2',
          size: 'lg',
          bold: 'bold',
          margin: select('heading margin', ['', '0', 'lg', 'xl', 'xl 0', 'md xl xxl xl', '0'], 'lg'),
        }}
      />
    ),
    {
      info: Readme,
    },
  )
  .add(
    'multiple open entries allowed',
    () => (
      <Accordion
        entries={ENTRIES_1.map((entry) => ({ ...entry, isOpenInitially: true }))}
        isLarge={boolean('isLarge', false)}
        isUnfoldable
      />
    ),
    {
      info: Readme,
    },
  )

  .add(
    'dynamic example',
    withState({ entries: searchEntriesProps.entries }, (store) => {
      const addEntry = (entry: AccordionEntryObject) => {
        store.set({ entries: [...store.state.entries, entry] })
      }

      return (
        <>
          <Button
            onClick={() => {
              const id = uniqueId('another-entry-')
              const newEntry: AccordionEntryObject = {
                id,
                details: `hallooooo ${id}`,
                title: id,
                isOpenInitially: true,
              }
              addEntry(newEntry)
            }}
          >
            Add entry initially open
          </Button>
          <Button
            onClick={() => {
              const id = uniqueId('another-entry-')
              const newEntry: AccordionEntryObject = {
                id,
                details: `hallooooo ${id}`,
                title: id,
                isOpenInitially: false,
              }
              addEntry(newEntry)
            }}
          >
            Add entry initially close
          </Button>
          <Accordion {...searchEntriesProps} entries={store.state.entries} isLarge={boolean('isLarge', false)} />
        </>
      )
    }),
    {
      info: Readme,
    },
  )
  .add(
    'second entry initially open',
    () => (
      <Accordion
        entries={ENTRIES_1.map((e, i) => (i === 1 ? { ...e, isOpenInitially: true } : e))}
        isLarge={boolean('isLarge', false)}
      />
    ),
    {
      info: Readme,
    },
  )
  .add(
    'expanded from breakpoint',
    () => (
      <>
        <Accordion
          entries={[
            {
              title: 'expanded from sm',
              details: 'expanded from sm',
            },
          ]}
          isExpandedFrom="sm"
        />
        <Accordion
          entries={[
            {
              title: 'expanded from md',
              details: 'expanded from md',
            },
          ]}
          isExpandedFrom="md"
        />
        <Accordion
          entries={[
            {
              title: 'expanded from lg',
              details: 'expanded from lg',
            },
          ]}
          isExpandedFrom="lg"
        />
        <Accordion
          entries={[
            {
              title: 'expanded from xl',
              details: 'expanded from xl',
            },
          ]}
          isExpandedFrom="xl"
        />
        <Accordion
          entries={[
            {
              title: 'expanded from xxl',
              details: 'expanded from xxl',
            },
          ]}
          isExpandedFrom="xxl"
        />
      </>
    ),
    {
      info: Readme,
    },
  )
