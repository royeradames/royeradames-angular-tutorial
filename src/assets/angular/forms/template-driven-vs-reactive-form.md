Because Angular is a single page application. Angular makes a Javascript Object representation with the form with values and meta data. The meta data has things has if the form has been touch, or if a input has been correctly filed. From there you can send the form data to a server though Angular HTTP request. Angular has 2 method of doing form

- `Template-driven (TD)` (Avoid or support legacy) Angular infers the form object from the DOM
  - Can get out of hand quickly

- `Reactive Approach` (always used) Form is created programmatically and synchronized with the DOM
  - Includes powerful subscriptions, and classes
  - Then to simplify the form in the long term

Reactive approach is used for production. TD is was the only option for Angular v1.
