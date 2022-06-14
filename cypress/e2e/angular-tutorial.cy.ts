describe("First tutorial loads currently", () => {
  xit("Landing page loads", () => {
    cy.visit("/angular/welcome-to-angular");

    cy.get('[data-cy="menu-next"]').should("exist");
    cy.get('[data-cy="sections"]').should("exist");
    cy.get('[data-cy="footer-next"]').should("exist");
    cy.get('[data-cy="edit-tutorial"]').should("exist");
    cy.get('[data-cy="tutorial"] > :nth-child(1)').should("exist");

    cy.get('[data-cy="menu-previous"]').should("not.exist");
    cy.get('[data-cy="footer-previous"]').should("not.exist");
    cy.get('[data-cy="practice-button"]').should("not.exist");

    // validate that the select has the current tutorial
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
  });

  xit("Last tutorial loads correctly", () => {
    // go to the last angular tutorial
    cy.visit("/angular");
    cy.get('[data-cy="sections"]')
      .find("option")
      .its("length")
      .then((len) => {
        cy.get('[data-cy="sections"]').select(len - 1);
      });

    cy.get('[data-cy="menu-next"]').should("not.exist");
    cy.get('[data-cy="footer-next"]').should("not.exist");

    cy.get('[data-cy="sections"]').should("exist");
    cy.get('[data-cy="edit-tutorial"]').should("exist");
    cy.get('[data-cy="tutorial"] > :nth-child(1)').should("exist");
    cy.get('[data-cy="menu-previous"]').should("exist");
    cy.get('[data-cy="footer-previous"]').should("exist");

    // selected option should be the last one
    cy.get('[data-cy="sections"] > optgroup > option')
      .last()
      .then(($option) => {
        cy.get('[data-cy="sections"] option:selected').contains($option.text());
        cy.get('[data-cy="sections"] option:selected').should(
          "have.value",
          $option.val()
        );
      });
  });

  // https://docs.cypress.io/api/commands/each#Arguments
  //docs.cypress.io/api/commands/url#Syntax
  xit("Should go from the first tutorial to the last only using the header next arrow key", () => {
    cy.visit("/angular");

    // loop through all the options
    // check that option value = selections optgroup option value of the same index
    // click on menu-next after the value check
    // don't click on the last option
    cy.get('[data-cy="sections"] > optgroup > option').each(
      ($option, index, $list) => {
        cy.get('[data-cy="sections"] option:selected').contains($option.text());
        cy.get('[data-cy="sections"] option:selected').should(
          "have.value",
          $option.val()
        );

        if (index !== $list.length - 1) {
          // don't click on the last option
          cy.get('[data-cy="menu-next"]').click();
        }
      }
    );
  });
  xit("Should go from the first tutorial to the last only using the footer next arrow key", () => {
    cy.visit("/angular");

    // loop through all the options
    // check that option value = selections optgroup option value of the same index
    // click on menu-next after the value check
    // don't click on the last option
    cy.get('[data-cy="sections"] > optgroup > option').each(
      ($option, index, $list) => {
        cy.get('[data-cy="sections"] option:selected').contains($option.text());
        cy.get('[data-cy="sections"] option:selected').should(
          "have.value",
          $option.val()
        );

        if (index !== $list.length - 1) {
          // don't click on the last option
          cy.get('[data-cy="footer-next"]').click();
        }
      }
    );
  });
  xit("Should go from the last tutorial to the first only using the header next arrow key and check that the select option is the current option", () => {
    cy.visit("/angular");
    cy.get('[data-cy="sections"]')
      .find("option")
      .its("length")
      .then((len) => {
        cy.get('[data-cy="sections"]').select(len - 1);
      });

    // loop through all the options
    // check that option value = selections optgroup option value of the same index
    // click on menu-next after the value check
    // don't click on the last option
    cy.get('[data-cy="sections"] > optgroup > option').each(
      (_$option, index, $list) => {
        const firstIndex = 0;
        const lastIndex = $list.length - 1;
        const descendingIndex = lastIndex - index;
        const previousButtonExist = !(descendingIndex === firstIndex);

        const value = (<HTMLInputElement>$list[descendingIndex]).value;
        const text = $list[descendingIndex].innerHTML;

        cy.get('[data-cy="sections"] option:selected').should(
          "have.value",
          value
        );
        cy.get('[data-cy="sections"] option:selected').should(
          "have.text",
          text
        );

        if (previousButtonExist) cy.get('[data-cy="menu-previous"]').click();
      }
    );
  });
  xit("Should go from the last tutorial to the first only using the footer previous arrow key", () => {
    cy.visit("/angular");
    cy.get('[data-cy="sections"]')
      .find("option")
      .its("length")
      .then((len) => {
        cy.get('[data-cy="sections"]').select(len - 1);
      });

    // loop through all the options
    // check that option value = selections optgroup option value of the same index
    // click on menu-next after the value check
    // don't click on the last option
    cy.get('[data-cy="sections"] > optgroup > option').each(
      (_$option, index, $list) => {
        const firstIndex = 0;
        const lastIndex = $list.length - 1;
        const descendingIndex = lastIndex - index;
        const previousButtonExist = !(descendingIndex === firstIndex);

        const value = (<HTMLInputElement>$list[descendingIndex]).value;
        const text = $list[descendingIndex].innerHTML;

        cy.get('[data-cy="sections"] option:selected').should(
          "have.value",
          value
        );
        cy.get('[data-cy="sections"] option:selected').should(
          "have.text",
          text
        );

        if (previousButtonExist) cy.get('[data-cy="footer-previous"]').click();
      }
    );
  });
});
