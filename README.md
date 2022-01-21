# Simple Carousel & Cards Landing Page

The attached code is basic HTML, CSS, and vanilla JS with minimal styling depicting a simple landing page with a carousel element and cards.

## Carousel

The carousel functions in the following way:

1. We select the carousel items (in this case, the divs containing each of the images) and assign the array to a variable.
2. We select the navigation buttons the same way, and assign the array to a variable.
3. On page load, we add the 'active' class to the first button and carousel item, which then renders the first image.
4. We then iterate through the array of buttons, and assign an on-click to each button, matching the index of the button to the corresponding index of the carousel item.
5. When a navigation button is clicked, we remove the 'active' class from all buttons and items. We then add the 'active' class to only the corresponding button, and also to the carousel item with the same index as the button.

## Cards

The cards are built and positioned using flex. A display of flex is first assigned to the container holding the 3 cards. Within that container, each card is surrounded by an outer div, which is also assigned a display of flex. This pattern continues into the body of the card containing the card title, text, and button, which are also assigned a display of flex to correctly and responsively position elements.
