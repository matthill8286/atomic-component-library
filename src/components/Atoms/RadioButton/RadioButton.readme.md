## RadioButton

### RadioGroup

With a `RadioGroup` you can wrap your associated radio buttons and get a clean interface for naming, onChange handlers and disabling of the whole group.

It is implemented as a Component with a render prop (`children`). That means you will have to provide a function as only child. That function has the following signature:

```typescript
;(props: { name: string; onChange: (isChecked?: boolean, value?: string) => void; selected: string }) => React.Element
```

That means you can return any JSX you want including not only RadioButtons but also Grids and other Elements. The arrangement of the RadioButtons is totally up to you, but the general guidelines of our style-guide should be followed. Therefore, especially the `Grid` component can be used to align the radio inputs according to the rest of the page, even with different look for different viewports.

For a very small example look into the RadioButton-story. It shows that with the help of `RadioGroup` you can even implement a "deselect" functionality for your RadioButtons.
