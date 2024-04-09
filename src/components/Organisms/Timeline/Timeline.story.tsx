import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  OtherCalendar,
  OtherCheckmarkCircleOutlined,
  OtherClearCircleOutlined,
  OtherPercentage,
  OtherSaveToPlaylist,
} from 'atomic-icon-library'
import { CopyText } from '@/components/Atoms/Typography'
import { Timeline, TimelineProps } from '../Timeline'

export default {
  title: 'Design System/Organisms/Timeline',
  component: Timeline,
  argTypes: {
    header: { control: { type: 'text' } },
    items: { control: { type: 'object' } },
  },
} as Meta

const Template: Story<TimelineProps> = ({ ...args }) => {
  return <Timeline {...args} />
}

const baseArgs: Partial<TimelineProps> = {}

export const Index = Template.bind({})
Index.args = {
  ...baseArgs,
  headline: 'So einfach geht es:',
  items: [
    {
      title: 'Paket vorbereiten',
      description:
        'Bitte verpacken Sie die ausgedruckten Rücksendeunterlagen und die Artikel sorgfältig, am besten in der Originalverpackung. Kleben Sie das Retourenetikett auf das Paket.',
      icon: <OtherCalendar />,
      id: 'item1',
    },
    {
      title: 'Paket abgeben',
      description:
        'Bringen Sie das Paket zur Ihrer Postfiliale. Bitte bewahren Sie den Einlieferungsbeleg bis zum Abschluss der Retoure auf. Die Rücksendung ist für Sie kostenlos.',
      icon: <OtherPercentage />,
      id: 'item2',
    },
    {
      title: 'Geld zurückerhalten',
      description:
        'Die Rückerstattung erfolgt innerhalb von 14 Tagen nach Eingang und Prüfung der Rücksendung auf das ursprünglich eingesetzte Zahlungsmittel.',
      icon: <OtherSaveToPlaylist />,
      id: 'item3',
    },
  ],
}

export const WithoutTitles = Template.bind({})
WithoutTitles.args = {
  ...baseArgs,
  headline: 'Vielen Dank für Ihre Registrierung!',
  items: [
    {
      description: (
        <CopyText fontSize="sm" tag="p" margin="0">
          Ihr MediaMarkt Online Konto wurde erfolgreich erstellt.
        </CopyText>
      ),
      icon: <OtherCheckmarkCircleOutlined />,
      id: 'item1',
    },
    {
      description: (
        <CopyText fontSize="sm" tag="p" color="error" margin="0">
          Leider konnten wir die Anmeldung für den MediaMarkt Club nicht erfolgreich abschließen.
        </CopyText>
      ),
      icon: <OtherClearCircleOutlined />,
      id: 'item2',
    },
    {
      description: (
        <CopyText fontSize="sm" tag="p" margin="0">
          So kommen Sie trotzdem zu den exklusiven Club Vorteilen: Bitte gehen Sie in den Bereich „Mein Konto“ und
          melden Sie sich dort für den MediaMarkt Club an.
        </CopyText>
      ),
      icon: <OtherSaveToPlaylist />,
      id: 'item3',
    },
  ],
}
