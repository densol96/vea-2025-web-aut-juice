import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  static get emailField() {
    return cy.get("#emailControl");
  }

  static get passwordField() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestionField() {
    return cy.get("[name='securityQuestion']");
  }

  static get securityQuestionFieldOptions() {
    return cy.get("mat-option");
  }

  static selectSecurityQuestions(optionText) {
    this.securityQuestionField.click();
    this.securityQuestionFieldOptions.contains(optionText).click();
  }

  static get answerField() {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("#registerButton");
  }
}
