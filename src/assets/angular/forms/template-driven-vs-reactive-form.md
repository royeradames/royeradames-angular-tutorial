Because Angular is a single page application. Angular makes a Javascript Object representation with the form with values and meta data. The meta data has things has if the form has been touch, or if a input has been correctly filed. From there you can send the form data to a server though Angular HTTP request. Angular has 2 method of doing form

- `Template-driven (TD)` (Avoid or support legacy) Angular infers the form object from the DOM
  - Can get out of hand quickly

- `Reactive Approach` (always used) Form is created programmatically and synchronized with the DOM
  - Includes powerful subscriptions, and classes
  - Then to simplify the form in the long term

Reactive approach is used for production. TD is was the only option for Angular v1.

## The `<label>` Element
> The **for attribute of the `<label> `tag should be equal to the id attribute** of the `<input>` element to bind them together.
- The <label> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
- The <label> element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.

## Common Inputs
- <input type="text">`<input type="text">` 
  - Displays a single-line text input field
  - specialize types
    - email
    - search
    - password
- <input type="radio">`<input type="radio">`
  - Displays a radio button (for selecting one of many choices)
- <input type="checkbox">`<input type="checkbox">`
  - Displays a checkbox (for selecting zero or more of many choices)
- Buttons
  - <input type="submit">`<input type="submit">`
    - Displays a submit button (for submitting the form)
    - `value=''` changes the button text 
  - <input type="button" value='button'>`<input type="button" value='button'>`
    - Displays a clickable button
  - <button>`<HTML>`</button>`<button><HTML></button>`
    - Can display html and css
    - There are 3 supported types for a button
      - submit ||  "submits the form when clicked (default)"
      - reset  ||  "resets the fields in the form when clicked"
      - button ||  "clickable, but without any event handler until one is assigned"
- picker
  - <input type="date">`<input type="date">`
    - Value is a string representing a date in YYYY-MM-DD format, or empty

[extensive list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

