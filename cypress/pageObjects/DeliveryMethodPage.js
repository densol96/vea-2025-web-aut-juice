export class DeliveryMethodPage {
  static get deliveryOptions() {
    return cy.get("mat-row");
  }

  static get continueButton() {
    return cy.get("[aria-label='Proceed to delivery method selection']");
  }
}
