export class SavedPaymentMethodsPage {
  static get addNewCard() {
    return cy.get("mat-panel-title").contains("Add new card");
  }

  static get name() {
    return cy.get("mat-form-field").contains("Name");
  }

  static get cardNumber() {
    return cy.get("mat-form-field").contains("Card Number");
  }

  static get month() {
    return cy.get("#mat-input-4");
  }

  static get year() {
    return cy.get("#mat-input-5");
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }

  static cellWasAdded(text) {
    return cy.get("mat-cell").contains(text).should("exist");
  }
}
