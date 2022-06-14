
# Lessons learned

## Reverse array of elements traversal with Cypress

https://stackoverflow.com/questions/61329435/cypress-reverse-each

the eq solution implemented with .each()

```ts
cy.get('[data-cy="sections"] > optgroup > option').each(
  (_$option, index, $list) => {
    const firstIndex = 0;
    const lastIndex = $list.length - 1;
    const descendingIndex = lastIndex - index;

      cy.wrap($list).eq(descendingIndex).click({force:true})
  
  }
);
```

Cons:

$list: HTMLElement[] instead of JQuery<HTMLElement[]>
We have to use javascript to get access the $list
We cannot use $list[descendingIndex].text() or $list[descendingIndex].val()
Instead we can use $list.innerHTML, $list.[descendingIndex].click() or ($list).value
I recommend to use cy.wrap($list).(cypress command) for actions and if we need access to some string, number, or value, use javascript to get it from the $list.

[Source](https://stackoverflow.com/a/72588477/3044126)

v1
```ts
cy.get('[data-cy="sections"] > optgroup > option')
    .its("length")
    .then((numberOfItems) => {
      for (var i = numberOfItems - 1; i >= 0; i--) {
        // validate the current option is the selected option
        cy.get('[data-cy="sections"] > optgroup > option')
          .eq(i)
          .then(($option) => {
            cy.get('[data-cy="sections"] option:selected').contains(
              $option.text()
            );
            cy.get('[data-cy="sections"] option:selected').should(
              "have.value",
              $option.val()
            );
          });
        if (i !== 0) {
          // don't click on the last option
          cy.get('[data-cy="menu-previous"]').click();
        }
      }
    });
```





## Why use the .then() method?

get cypress to return an input (string, number, etc) to use it on a assertion

```ts
// todo: validate that the select has the current tutorial
// Why use the .then() method? To get cypress to return an input (string, number, etc) to use it on a assertion
cy.get('[data-cy="sections"] > optgroup > option')
  .first()
  .then(($option) => {
    cy.get('[data-cy="sections"] option:selected').contains($option.text());
    cy.get('[data-cy="sections"] option:selected').should(
      "have.value",
      $option.val()
    );
  });
```
## The .then() method are jquery methods

[List of jquery methods](https://api.jquery.com/)

## Current option matches the first option

```ts
// todo: validate that the select has the current tutorial
// v1:
cy.get('[data-cy="sections"] option:selected').then(($selectedOption) => {
    // .val() => return the value of the selected option
    // .text() => return the text of the selected option
    console.log($selectedOption.text());
    debugger;
    cy.get('[data-cy="sections"]')
      .select(0)
      .should("have.value", $selectedOption.val());
  });

// v2
// 3 layer deep getting the first option text
cy.get('[data-cy="sections"]').within(() => {
  cy.get("option").then(($option) => {
    console.log(
      cy
        .wrap($option[0])
        .invoke("text")
        .then(($text) => {
          debugger;
          console.log($text);
        })
    );
  });
});
// but is looks complex

// v3
// we can use css > nested child selector and base our selection on the semantic html structure
  
cy.get('[data-cy="sections"] > optgroup > option')
  .first()
  .then(($option) => {
    console.log($option);
    debugger;
  });

// but better would be if the target option would have a data-cy attribute
// but due to the options being generated dynamically, adding a data-cy attribute can change more often than the structure of the html.
```

## .get and :nth-child()

no spaces between tag and pseudo-class selector
[Resource](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

```ts
// works
cy.get('[data-cy="sections"] > optgroup > option:nth-child(1)')

// doesn't work
cy.get('[data-cy="sections"] > optgroup > option :nth-child(1)')

```

## .eq, .first, .last can replace :nth-child

[eq](https://docs.cypress.io/api/commands/eq)
[first](https://docs.cypress.io/api/commands/first)
[last](https://docs.cypress.io/api/commands/last)

```ts
// results of a list of the first element of each optgroup
cy.get('[data-cy="sections"] > optgroup > option:nth-child(1)').then(
  ($option) => {
    console.log($option);
    debugger;
  }
);

// results the first option element of the list of sections
cy.get('[data-cy="sections"] > optgroup > option')
  .eq(0)
  .then(($option) => {
    console.log($option);
    debugger;
  });
```

## What does .eq() stand for?

eq() makes sense if you know it's part of a related set of selectors (from the JQuery docs):

> The index-related selectors (:eq(), :lt(), :gt(), :even, :odd) filter the set of elements that have matched the expressions that precede them.

When lined up next to lt (less than), and gt (greater than), it's clear that it means equals, specifically "index equals n".

[Source](https://stackoverflow.com/a/15059383/3044126)