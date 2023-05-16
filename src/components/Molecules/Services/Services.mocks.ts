import { ServicesProps, ServiceType } from './Services.interface'

export const services: ServiceType[] = [
  {
    id: '1999573',
    name: 'Comfort Installation TV and Home Cinema System',
    price: {
      amount: 0,
      currency: 'EUR',
    },
    offerType: 'services',
    selected: false,
  },
  {
    id: '1999575',
    name: 'A short warranty',
    price: {
      amount: 25,
      currency: 'EUR',
    },
    offerType: 'services',
    selected: false,
  },
  {
    id: '1999576',
    name: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    price: {
      amount: 50,
      currency: 'EUR',
    },
    offerType: 'services',
    selected: true,
  },
  {
    id: '1999577',
    name: 'Stet clita kasd gubergren takimata',
    price: {
      amount: 25,
      currency: 'EUR',
    },
    offerType: 'services',
    selected: false,
  },
]
export const props: ServicesProps = {
  freeLabel: 'Free',
  items: [...services],
  lineitemId: 'id-1',
  loading: false,
  offersDisabled: false,
  onChange: () => null,
  onIconModalOpen: () => null,
}
