## Position Property

Every HTML element has a default position is starts in. This position is decided by where the element comes in the html code.

To adjust this positioning:

- Static: default
- Relative: allows us to offset an element relative to its default position
- Absolute: takes the element out of the normal flow. Orients the element to the top left corner of its most immediate parent element
- Fixed: causes the element to be removed from the normal flow and lose its space in the document
- Sticky: A combination of relative and fixed positioning. Until it crosses a specific threshold. After crossing the threshold, the element becomes fixed

- 💥 참고 💥 Z-index allows us to manipulate the stacking order. Everything has a default z-index of 0.  
  Negative values are often used to set backgrounds.  
  The best strategy for z-indexing is to increments by a 100 instead of 1, 2, etc.
  The bigger z-index comes on top.
