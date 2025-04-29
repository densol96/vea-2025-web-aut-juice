export class OrderSummaryPage {
  static get continueButton() {
    return cy.get("[aria-label='Complete your purchase']");
  }
}
