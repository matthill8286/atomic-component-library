# Accordion Molecule

The accordion component lets users show and hide sections of detailed content on a page. Accordions help break down complex and detailled informations into small pieces which the user can expand at their own pace. 
Accordions hide content, so the headline need to be clear.

It has a "large" variant with a larger label font. And one can specify a breakpoint (xs-xxl) and from that breakpoint upwards the accordion entries are statically open. Useful for compact layouts on small screens and showing constantly all information on larger screens.

To have a accordion entry without a border set `noBorderTop: true` otherwise all entries will have `borderTop`

The Accordion can also set the entry to be initiallyOpen by setting `isOpenInitially: true` on the entry that needs be open.  
