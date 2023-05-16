import { QuickAction } from './ActionLink.interface'

export const getActionLinkType = (quickAction: QuickAction) => {
  if (quickAction.href) {
    return {
      href: quickAction.href,
    }
  } else if (quickAction.to) {
    return {
      to: quickAction.to,
    }
  }
}
