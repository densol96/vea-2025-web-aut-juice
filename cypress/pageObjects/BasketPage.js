/**
 * Not necessary to extends the BasePage here as we do not require visit functionality and we do not override the url annyway.
 * (Probs, Login / Registration could not extend the Base page either, but I will just leave it as it is..).
 * It will be the same thinking for other pageObjects not requiring these functionalities..
 */

export class BasketPage {
  static get checkoutBtn() {
    return cy.get("#checkoutButton");
  }
}
