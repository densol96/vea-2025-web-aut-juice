export class PaymentOptionsPage {
  static selectPaymentOptionByCardNumberPattern(regex) {
    return cy
      .contains("mat-cell", /5678 $/)
      .parent("mat-row")
      .find("mat-radio-button input[type='radio']");
  }

  static get continueButton() {
    return cy.get("[aria-label='Proceed to review']");
  }
}
