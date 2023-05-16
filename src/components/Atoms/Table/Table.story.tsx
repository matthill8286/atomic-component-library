import { boolean, select } from '@storybook/addon-knobs'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from './'
import { bitsHistoryData, salesSlipData, salesSlipMobileData, salesSlipTotalPricesData, tableData } from './Table.mock'
import Readme from './Table.readme.mdx'

interface TableRow {
  type: string
  value: string
}

interface SalesSlipRow {
  product: string | React.ReactNode
  productNumber?: string
  quantity?: number
  unitPrice?: string
  totalPrice: string
  noBorder: boolean
}

interface SalesSlipPriceRow {
  priceLabel: string | React.ReactNode
  price: string | React.ReactNode
}

export default {
  title: 'Design System/Atoms/Table',
}

export const Default = () => {
  const tableKnobs = {
    layout: select('table-laylout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    ariaLabel: 'this is a table',
  }

  const tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', false, 'Cell'),
  }
  return (
    <Table {...tableKnobs}>
      <TableHead>
        <TableRow>
          <TableCell cellType="th" {...tableCellKnobs}>
            <div>Technische Merkmale</div>
          </TableCell>
          <TableCell cellType="th" {...tableCellKnobs} noPadding />
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row: TableRow) => (
          <TableRow key={row.type}>
            <TableCell {...tableCellKnobs} cellWidth={30} mobileHeadline>
              {row.type}
            </TableCell>
            <TableCell {...tableCellKnobs} cellWidth={50}>
              {row.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

Default.story = {
  name: 'Default Table',
  parameters: {
    info: Readme,
  },
}

export const SalesslipMobile = () => {
  const tableKnobs = {
    layout: select('table-laylout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    ariaLabel: 'this is a table',
  }

  const tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', false, 'Cell'),
  }
  return (
    <Table {...tableKnobs}>
      <TableHead>
        <TableRow>
          <TableCell cellType="th" collapsible={false} {...tableCellKnobs}>
            <div>Hersteller/Bezeichnung</div>
          </TableCell>
          <TableCell cellType="th" collapsible={false} textAlign={'right'} {...tableCellKnobs}>
            <div>Gesamtpreis</div>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {salesSlipMobileData.map((row: SalesSlipRow, index) => (
          <TableRow key={index} verticalAlign={'top'} collapsible={false}>
            <TableCell {...tableCellKnobs} cellWidth={30} collapsible={false} noBorder={row.noBorder}>
              {row.product}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              cellWidth={10}
              textAlign={'right'}
              collapsible={false}
              noBorder={row.noBorder}
            >
              {row.totalPrice}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

SalesslipMobile.story = {
  name: 'salesslip | mobile',

  parameters: {
    info: Readme,
  },
}

export const SalesslipDesktop = () => {
  const tableKnobs = {
    layout: select('table-laylout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    ariaLabel: 'this is a table',
  }

  const tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', false, 'Cell'),
  }
  return (
    <Table {...tableKnobs}>
      <TableHead>
        <TableRow>
          <TableCell cellType="th" collapsible={false} {...tableCellKnobs}>
            <div>Hersteller/Bezeichnung</div>
          </TableCell>
          <TableCell cellType="th" collapsible={false} {...tableCellKnobs}>
            <div>Art.-Nr</div>
          </TableCell>
          <TableCell cellType="th" collapsible={false} {...tableCellKnobs}>
            <div>Anzahl</div>
          </TableCell>
          <TableCell cellType="th" collapsible={false} textAlign={'right'} {...tableCellKnobs}>
            <div>Stückpreis</div>
          </TableCell>
          <TableCell cellType="th" collapsible={false} textAlign={'right'} {...tableCellKnobs}>
            <div>Gesamtpreis</div>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {salesSlipData.map((row: SalesSlipRow, index) => (
          <TableRow key={index}>
            <TableCell {...tableCellKnobs} cellWidth={60} collapsible={false} noBorder={row.noBorder}>
              {row.product}
            </TableCell>
            <TableCell {...tableCellKnobs} cellWidth={10} collapsible={false} noBorder={row.noBorder}>
              {row.productNumber}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              textAlign={'center'}
              cellWidth={10}
              collapsible={false}
              noBorder={row.noBorder}
            >
              {row.quantity}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              textAlign={'right'}
              cellWidth={10}
              collapsible={false}
              noBorder={row.noBorder}
            >
              {row.unitPrice}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              textAlign={'right'}
              cellWidth={10}
              collapsible={false}
              noBorder={row.noBorder}
            >
              {row.totalPrice}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

SalesslipDesktop.story = {
  name: 'salesslip | desktop',

  parameters: {
    info: Readme,
  },
}

export const SalesslipPrices = () => {
  const tableKnobs = {
    layout: select('table-laylout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    ariaLabel: 'this is a table',
  }

  const tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', true, 'Cell'),
  }
  return (
    <Table {...tableKnobs}>
      <TableBody>
        {salesSlipTotalPricesData.map((row: SalesSlipPriceRow, index) => (
          <TableRow key={index} collapsible={false}>
            <TableCell {...tableCellKnobs} cellWidth={10} noBorder noPadding textAlign={'right'} collapsible={false}>
              {row.priceLabel}
            </TableCell>
            <TableCell {...tableCellKnobs} cellWidth={10} noBorder noPadding textAlign={'right'} collapsible={false}>
              {row.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

SalesslipPrices.story = {
  name: 'salesslip | prices',

  parameters: {
    info: Readme,
  },
}

export const BitsHistory = () => {
  const tableKnobs = {
    layout: select('table-laylout', ['auto', 'fixed', 'initial'], 'auto', 'Table'),
    withBorderRadius: boolean('withBorderRadius', true, 'Table'),
    isScrollable: boolean('isScrollable', false, 'Table'),
    ariaLabel: 'this is a table',
  }

  const tableCellKnobs = {
    borderDirection: select('border-direction', ['right', 'bottom'], 'bottom', 'Cell'),
    noBorder: boolean('noBorder', false, 'Cell'),
  }
  return (
    <Table {...tableKnobs} fullBorder withBorderRadius={false}>
      <TableHead isOutlineRequired>
        <TableRow disableHover>
          {bitsHistoryData.header.map((header, index) => (
            <TableCell key={index} cellType="th" collapsible={false} {...tableCellKnobs}>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody fullBorder>
        {bitsHistoryData.rows.map((row, index) => (
          <TableRow key={index} collapsible={false}>
            <TableCell
              {...tableCellKnobs}
              cellWidth={10}
              collapsible={false}
              fullBorder
              noBorder={false}
              borderDirection={'right'}
            >
              {row.date}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              cellWidth={10}
              collapsible={false}
              fullBorder
              noBorder={false}
              borderDirection={'right'}
            >
              {row.bits}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              cellWidth={10}
              collapsible={false}
              fullBorder
              noBorder={false}
              borderDirection={'right'}
            >
              {row.action}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              cellWidth={10}
              collapsible={false}
              fullBorder
              noBorder={false}
              borderDirection={'right'}
            >
              {row.place}
            </TableCell>
            <TableCell
              {...tableCellKnobs}
              cellWidth={10}
              collapsible={false}
              fullBorder
              noBorder={false}
              borderDirection={'right'}
            >
              {row.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

BitsHistory.story = {
  name: 'bitsHistory',

  parameters: {
    info: Readme,
  },
}
