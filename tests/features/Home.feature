Feature: Home Page
  As a user
  I want to see the home page
  So that I can navigate easily

  Scenario: Home page loads successfully
    Given I am on the home page
    Then I should see the title "Welcome to MercuryDemo"
    And I should see a button "Create an Account"
    And I should see a button "Sign In"



Scenario: Verify Why Choose MercuryDemo? section
    Given I am on the home page
    Then I should see the section heading "Why Choose MercuryDemo?"
    And I should see the service "Solar Solutions" with description "Maximize your energy savings with our solar solutions."
    And I should see the service "EV Charging" with description "Charge your electric vehicle with MercuryDemo EV plans."
    And I should see the service "100% Renewable" with description "We power homes with clean, sustainable energy sources."