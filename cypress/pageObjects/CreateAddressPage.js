export class CreateAddressPage {
  static get countryInput() {
    return cy.get("[placeholder='Please provide a country.']");
  }

  static get nameInput() {
    return cy.get("input[placeholder='Please provide a name.']");
  }

  static get mobNumberInput() {
    return cy.get("input[placeholder='Please provide a mobile number.']");
  }

  static get zipInput() {
    return cy.get("[placeholder='Please provide a ZIP code.']");
  }

  static get addressInput() {
    return cy.get("[placeholder='Please provide an address.']");
  }

  static get cityInput() {
    return cy.get("[placeholder='Please provide a city.']");
  }

  static get stateInput() {
    return cy.get("[placeholder='Please provide a state.']");
  }

  static get submitBtn() {
    return cy.get("#submitButton");
  }

  static tdWithTextOfExists(text) {
    return cy.get("mat-cell").contains(text).should("exist");
  }
}
