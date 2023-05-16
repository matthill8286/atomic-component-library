## Card atom

Cards are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

#### API

When `surface="selected"` the props `elevation` and `elevationHover` are ignored.

The `padding` prop accepts or a single value as string or an object mapping `top, right, bottom, left`.

The `shape` prop accepts or a single value as string or an object mapping `topLeft, topRight, bottomRight, bottomLeft`.

The `noBorder` prop accepts a single position as string like `top, right, bottom, left` or an array of positions.

For consistent `padding` the different breakpoints have been removed.
