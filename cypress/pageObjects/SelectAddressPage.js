export class SelectAddressPage {
  static get addressOptions() {
    return cy.get("mat-row");
  }

  static get continueButton() {
    return cy.get("[aria-label='Proceed to payment selection']");
  }
}
