Feature: Login Page
  As a user
  I want to log in
  So that I can access my dashboard

  Scenario: Create a new user before login
    Given I am on the signup page
    When I enter "testuser" as the signup username
    And I enter "password123" as the signup password
    And I confirm "password123" as the signup password
    And I click the "Create Account" button
    Then I should be redirected to the login page

  Scenario: Successful login
    Given I am on the login page
    When I enter "testuser" as username
    And I enter "password123" as password
    And I click the "Sign In" button
    Then I should be redirected to the dashboard
