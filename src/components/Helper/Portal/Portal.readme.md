# Portal component

## About

A simple wrapper component around React Portals. Portals are a cool feature of react that allow you to render a component / children in a different dom element. Good use cases could be for modals, hover items and tool tips.

From the offical Reactjs doco:

> Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

### Usage

Choose (or create) an HTML element where you would like your component to be rendered. eg.

```js
<div id="saiyan-dashboard-modal-portal" />
```

In your PWA code, import the portal component from the shared components.

When using the Portal component you must provide the `targetRootId` prop to specify where you would like the children components to be rendered.

```javascript
import { Portal } from 'webmobile-pwa-components'
  ...
  <div id="saiyan-dashboard-modal-portal"/>
  ...
  {additionalContentModal.shouldShowModal && (
    <Portal targetRootId="saiyan-dashboard-modal-portal">
        <AdditionalContentModal
          content={additionalContentModal.modalContent}
          handleClose={hideAdditionalContentModal}
        />
    </Portal>
    )}
  {isModalOpen && (
    <Portal targetRoot="saiyan-dashboard-modal-portal">
      <SharePlaylistSelectorModal
        ...
      />
    </Portal>
  )}
```

### More info

Official React Documentation
<https://reactjs.org/docs/portals.html>
