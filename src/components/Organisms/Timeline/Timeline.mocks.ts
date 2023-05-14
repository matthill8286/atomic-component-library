import { TimelineProps } from './Timeline.interface'

export const props: TimelineProps = {
  headline: 'So einfach geht es:',
  items: [
    {
      description:
        'Bitte verpacken Sie die ausgedruckten Rücksendeunterlagen und die Artikel sorgfältig, am besten in der Originalverpackung. Kleben Sie das Retourenetikett auf das Paket.',
      icon: 'loader',
      id: 'id-1',
      title: 'Paket vorbereiten',
    },
    {
      description:
        'Bringen Sie das Paket zur Ihrer Postfiliale. Bitte bewahren Sie den Einlieferungsbeleg bis zum Abschluss der Retoure auf. Die Rücksendung ist für Sie kostenlos.',
      icon: 'loader',
      id: 'id-2',
      title: 'Paket abgeben',
    },
    {
      description:
        'Die Rückerstattung erfolgt innerhalb von 14 Tagen nach Eingang und Prüfung der Rücksendung auf das ursprünglich eingesetzte Zahlungsmittel.',
      icon: 'loader',
      id: 'id-3',
      title: 'Geld zurückerhalten',
    },
  ],
}
