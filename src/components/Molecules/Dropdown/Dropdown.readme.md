## Dropdown Component ##

Select components are used for collecting user provided information from a list of options.

#### When To Use ####

A dropdown menu for displaying choices - an elegant alternative to the native <select> element.

Utilizing Radio is recommended when there are fewer total options (less than 4 or 5).

#### Changes ####

Placeholder and label had been merged into label prop.
The label behave like a placeholder when the dropdown hasn't a selected value, then after the user select an element it moves into the top left corner.

The prop resetToInitialIndex had been removed, the component will check and set the initialIndex to the currentIndex when it is specified.
