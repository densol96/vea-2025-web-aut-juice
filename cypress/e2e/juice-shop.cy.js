import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetACustomerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const randomNumber = Math.floor(Math.random() * 10000 + 1);
      const email = `email_${randomNumber}@ebox.com`;
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type("password123");
      RegistrationPage.repeatPasswordField.type("password123");
      // Click on Security Question menu
      // Select  "Name of your favorite pet?"
      RegistrationPage.selectSecurityQuestions("Name of your favorite pet?");
      // Fill in answer
      RegistrationPage.answerField.type("Kubik");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type("password123");
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchInput.type("Lemon").type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.selectCardWithTitle("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogProduct.should(
        "contain.text",
        "Sour but full of vitamins."
      );
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInput.type("500ml").type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.selectCardWithTitle("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogProduct.should(
        "contain.text",
        "Sour but full of vitamins."
      );
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInput.type("500ml").type("{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.selectCardWithTitle("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.matDialogProduct.should(
        "contain.text",
        "Now with even more exotic flavour."
      );
      // Close the card
      HomePage.productCloseButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.selectCardWithTitle("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogProduct.should(
        "contain.text",
        "Sour but full of vitamins."
      );
      // Close the card
      HomePage.productCloseButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.selectCardWithTitle("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.matDialogProduct.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchInput.type("King").type("{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.selectCardWithTitle(
        'OWASP Juice Shop "King of the Hill" Facemask'
      ).click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.seeReviewsAsBtn.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewPanel.within(() => {
        HomePage.validateReviewExists("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
      });
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchInput.type("Raspberry").type("{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.selectCardWithTitle("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.reviewTextarea.type("Tastes like metal");
      // Click Submit
      HomePage.reviewSubmitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.seeReviewsAsBtn.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviewPanel.within(() => {
        HomePage.validateReviewExists("Tastes like metal");
      });
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.productCards.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.changeCardsPerPageTo(24);
      // Validate that the amount of cards is 24
      HomePage.productCards.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.changeCardsPerPageTo(36);
      // Validate that the amount of cards is 36
      HomePage.productCards.should("have.length", 36);
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchInput.type("Girlie").type("{enter}");
      // Add to basket "Girlie"
      HomePage.selectCardWithTitle("Girlie").within(() => {
        HomePage.addToCart.click();
      });
      // Click on "Your Basket" button
      HomePage.cartButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutBtn.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressOptions.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryOptions.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678 "
      PaymentOptionsPage.selectPaymentOptionByCardNumberPattern(
        /5678 /
      ).click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.continueButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.confirmation.should(
        "have.text",
        "Thank you for your purchase!"
      );
    });

    // Create scenario - Add address
    it("Add address", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.btnWithTextOf("Orders & Payment").click();
      // Click on My saved addresses
      HomePage.btnWithTextOf("My saved addresses").click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddresses.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryInput.type("Latvia");
      CreateAddressPage.nameInput.type("Deniss");
      CreateAddressPage.mobNumberInput.type("12345678");
      CreateAddressPage.zipInput.type("LV-3601");
      CreateAddressPage.addressInput.type("Fake street 123");
      CreateAddressPage.cityInput.type("Ventspils");
      CreateAddressPage.stateInput.type("Kurzeme");
      // Click Submit button
      CreateAddressPage.submitBtn.click();
      // Validate that previously added address is visible
      CreateAddressPage.tdWithTextOfExists("Deniss");
      CreateAddressPage.tdWithTextOfExists("Latvia");
      CreateAddressPage.tdWithTextOfExists("Fake street 123");
      CreateAddressPage.tdWithTextOfExists("Ventspils");
      CreateAddressPage.tdWithTextOfExists("Kurzeme");
      CreateAddressPage.tdWithTextOfExists("LV-3601");
      // or
      CreateAddressPage.tdWithTextOfExists(
        "Fake street 123, Ventspils, Kurzeme, LV-3601"
      );
    });

    // Create scenario - Add payment option
    it("Add payment option", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.btnWithTextOf("Orders & Payment").click();
      // Click on My payment options
      HomePage.btnWithTextOf("My Payment Options").click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCard.click();
      // Fill in Name
      SavedPaymentMethodsPage.name.type("Deniss");
      // Fill in Card Number
      SavedPaymentMethodsPage.cardNumber.type("1234567887654321");
      // Set expiry month to 7
      SavedPaymentMethodsPage.month.select("7");
      // Set expiry year to 2090
      SavedPaymentMethodsPage.year.select("2090");
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.cellWasAdded("Deniss");
      SavedPaymentMethodsPage.cellWasAdded(/4321 $/);
      SavedPaymentMethodsPage.cellWasAdded("7/2090");
    });
  });
});
