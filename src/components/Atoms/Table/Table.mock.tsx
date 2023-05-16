import * as React from 'react'
import { PriceText, ProductData, ProductTitle, ProductWithDescription } from './mock/SalesSlipMockElements'

export const tableData = [
  {
    type: 'Produkttyp',
    value: 'Wärmepumpentrockner',
  },
  {
    type: 'Trommelmaterial',
    value: 'Edelstahl',
  },
  {
    type: 'Besondere Merkmale',
    value:
      'intelligente Trommelbewegung und Temperaturanpassungen dank AbsoluteCare® System, Wolle/Seide und Outdoor Trockenprogramm, schonendes und energieeffizientes Trocknen durch SensiDry® Technologie, Mengenautomatik ProSense®, Programmablauf-Anzeige, 8 kg XXL-ProTex Schontrommel mit 118 Liter, Inverter Motor - extrem leise im Betrieb 66 dB(A) und längere Lebensdauer.',
  },
]

export const salesSlipData = [
  {
    product: <ProductTitle productName={'APPLE iPhone 11 64 GB Violett Dual SIM'} manufacturer={'APPLE'} />,
    productNumber: '2598172',
    quantity: 1,
    unitPrice: '759,00 €',
    totalPrice: '759,00 €',
    noBorder: true,
  },
  {
    product: (
      <ProductWithDescription
        productWithTitle={{
          productName: '+ GARANTIEVERLÄNGERUNG',
          manufacturer: '+ GARANTIEVERLÄNGERUNG',
        }}
        description={
          'PLUSGARANTIE Versicherung für 4 Jahre: Materialfehler, Produktionsfehler, Abnutzung/Verschleiß (für Original-Akkus), K…'
        }
      />
    ),
    quantity: 1,
    unitPrice: '199,90 €',
    totalPrice: '199,90 €',
    noBorder: true,
  },
  {
    product: (
      <ProductTitle
        productName={'+ APPLE  AirPods 2. Gen mit Ladecase True-Wireless-Kopfhörer Weiß'}
        manufacturer={'+ APPLE'}
      />
    ),
    productNumber: '2539111',
    quantity: 1,
    unitPrice: '139,00 €',
    totalPrice: '139,00 €',
    noBorder: false,
  },
  {
    product: <ProductTitle productName={'MEDIAMARKT  Geschenkkarte 25 € Ladebetrag'} manufacturer={'MEDIAMARKT'} />,
    productNumber: '2999999',
    quantity: 1,
    unitPrice: '25,00 €',
    totalPrice: '25,00 €',
    noBorder: false,
  },
]

export const salesSlipMobileData = [
  {
    product: (
      <ProductData
        product={{
          productWithTitle: {
            productName: 'APPLE iPhone 11 64 GB Violett Dual SIM',
            manufacturer: 'APPLE',
          },
        }}
        subTexts={['Art.-Nr: 2598172', 'Anzahl: 1', 'Stückpreis: 759,00 €']}
      />
    ),
    totalPrice: '759,00 €',
    noBorder: true,
  },
  {
    product: (
      <ProductData
        product={{
          productWithTitle: {
            productName: '+ GARANTIEVERLÄNGERUNG',
            manufacturer: '+ GARANTIEVERLÄNGERUNG',
          },
          description:
            'PLUSGARANTIE Versicherung für 4 Jahre: Materialfehler, Produktionsfehler, Abnutzung/Verschleiß (für Original-Akkus), K…',
        }}
        subTexts={['Anzahl: 1', 'Stückpreis: 199,90 €']}
      />
    ),
    totalPrice: '199,90 €',
    noBorder: true,
  },
  {
    product: (
      <ProductData
        product={{
          productWithTitle: {
            productName: '+ APPLE  AirPods 2. Gen mit Ladecase True-Wireless-Kopfhörer Weiß',
            manufacturer: '+ APPLE',
          },
        }}
        subTexts={['Art.-Nr: 2539111', 'Anzahl: 1', 'Stückpreis: 139,00 €']}
      />
    ),
    totalPrice: '139,00 €',
    noBorder: false,
  },
  {
    product: (
      <ProductData
        product={{
          productWithTitle: {
            productName: 'MEDIAMARKT  Geschenkkarte 25 € Ladebetrag',
            manufacturer: 'MEDIAMARKT',
          },
        }}
        subTexts={['Art.-Nr: 2999999', 'Anzahl: 1', 'Stückpreis: 25,00 €']}
      />
    ),
    totalPrice: '25,00 €',
    noBorder: false,
  },
]

export const salesSlipTotalPricesData = [
  {
    priceLabel: <PriceText text={'Zwischensumme'} />,
    price: <PriceText text={'1.122,90 €'} />,
  },
  {
    priceLabel: <PriceText text={'Rabatt gesamt'} />,
    price: <PriceText text={'- 27,80 €'} />,
  },
  {
    priceLabel: <PriceText text={'Versandkosten'} />,
    price: <PriceText text={'0,00 €'} />,
  },
  {
    priceLabel: (
      <PriceText
        text={'Gesamtsumme'}
        textWeight={'bold'}
        fontSize={'md'}
        additionalInfo={'inkl. MwSt.'}
        additionalInfoTextAlign={'right'}
      />
    ),
    price: <PriceText text={'1.095,10 €'} textWeight={'bold'} fontSize={'md'} />,
  },
]

export const bitsHistoryData = {
  header: ['Datum', 'Bits', 'Aktion', 'Ort', 'Betrag'],
  rows: [
    {
      date: '20.05.2020',
      bits: '0',
      action: 'Vorgemerkte Bits',
      place: '-',
      amount: '-',
    },
    {
      date: '10.03.2020',
      bits: '-1.400',
      action: 'Rückgabe',
      place: 'SATURN München Theresienhöhe',
      amount: '139,99 €',
    },
    {
      date: '20.02.2020',
      bits: '1.400',
      action: 'Kauf',
      place: 'SATURN München Riem',
      amount: '139,99 €',
    },
    {
      date: '12.01.2020',
      bits: '400',
      action: 'Kauf',
      place: 'SATURN München Riem',
      amount: '39,99 €',
    },
    {
      date: '20.12.2019',
      bits: '100',
      action: 'Neuanmeldung zum SATURN CARD-Programm',
      place: '-',
      amount: '-',
    },
  ],
}
