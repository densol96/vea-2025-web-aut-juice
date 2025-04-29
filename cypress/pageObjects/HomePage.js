import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchInput() {
    return cy.get("#mat-input-1");
  }

  static get productCards() {
    return cy.get("mat-card.mdc-card");
  }

  static selectCardWithTitle(inTitle) {
    return this.productCards.filter((i, card) => {
      return card.innerText.includes(inTitle);
    });
  }

  static get matDialogProduct() {
    return cy.get(".mat-mdc-dialog-content");
  }

  static get productCloseButton() {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get seeReviewsAsBtn() {
    return cy.get("mat-expansion-panel").contains("Reviews");
  }

  static get reviewPanel() {
    return cy.get(".mat-expansion-panel-content");
  }

  static getReview(reviewContent) {
    return cy.get(".comment").contains(reviewContent);
  }

  static validateReviewExists(reviewContent) {
    this.getReview(reviewContent).should("exist");
  }

  static get reviewTextarea() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get reviewSubmitButton() {
    return cy.get("#submitButton");
  }

  static get matSelect() {
    return cy.get("mat-select");
  }

  static get matOption() {
    return cy.get("mat-option");
  }

  static changeCardsPerPageTo(number) {
    this.matSelect.click({ force: true });
    this.matOption.contains(`${number}`).click({ force: true });
  }

  static get addToCart() {
    return cy.get("[aria-label='Add to Basket']");
  }

  static get cartButton() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static btnWithTextOf(text) {
    return cy.get("button").contains(text);
  }
}
