@vehicle @quote-flow
Feature: Vehicle Insurance Quotation
  As a potential customer
  I want to request a personalized vehicle insurance quotation
  So that I can evaluate coverage options and pricing conveniently online

  Background:
    Given I am a registered user
    And I am logged into the insurance portal
    And I am on the dashboard
    When I start a new insurance quotation
    Then I should arrive at the vehicle information step

  @smoke @happy-path @vehicle-details
  Scenario: Provide valid vehicle information
    When I enter "Toyota" as the make
    And I enter "Corolla" as the model
    And I enter "2020" as the year
    And I enter "AB12 XYZ" as the registration number
    And I continue to the next step
    Then I should arrive at the vehicle usage step

  @smoke @happy-path @vehicle-details
  Scenario: Provide valid vehicle usage details
    Given I have entered valid vehicle information
    When I specify "12000" as the annual mileage
    And I indicate "Commuting" as the primary use
    And I choose "Garage" as the parking location
    And I continue to the next step driver details
    Then I should arrive at the driver information step

  @validation @regression @vehicle-details
  Scenario: Validate required vehicle fields
    When I leave the make field empty
    And I continue to the next step
    Then I should see the message "Make is required"
    And I should remain on the vehicle information step

  @boundary @validation @vehicle-details
  Scenario Outline: Validate year input
    When I enter "<year>" as the year
    And I continue to the next step
    Then I should see the message "<message>"

    Examples:
      | year | message                                |
      | 1899 | Vehicle year must be 1900 or later     |
      | 2030 | Vehicle year cannot be in the future   |
      | abc  | Year must be a valid number            |

  @critical @happy-path @driver-history
  Scenario: Provide valid driver history
    When I enter "Toyota" as the make
    And I enter "Corolla" as the model
    And I enter "2020" as the year
    And I enter "AB12 XYZ" as the registration number
    And I continue to the next step
    Given I have submitted vehicle usage details
    When I provide the following driving history:
      | License Duration | Claims History               |
      | 5+ years         | No claims in the past 5 years |
    And I continue to the next step in driver information
    Then I should arrive at the coverage selection step

  @happy-path @coverage
  Scenario: Select coverage and get quote
    When I enter "Toyota" as the make
    And I enter "Corolla" as the model
    And I enter "2020" as the year
    And I enter "AB12 XYZ" as the registration number
    And I continue to the next step
    Given I have submitted vehicle usage details
    When I provide the following driving history:
      | License Duration | Claims History               |
      | 5+ years         | No claims in the past 5 years |
    And I continue to the next step in driver information
    Given I have provided driver information
    When I select "Comprehensive" as the coverage type
    And I add "Roadside Assistance" as an add-on
    And I continue to the next step to premium estimate details
    Then I should see a premium estimate
    And I should have the option to email the quote

  @business-goal @happy-path @quote-summary
  Scenario: Proceed to policy application
    When I enter "Toyota" as the make
    And I enter "Corolla" as the model
    And I enter "2020" as the year
    And I enter "AB12 XYZ" as the registration number
    And I continue to the next step
    Given I have submitted vehicle usage details
    When I provide the following driving history:
      | License Duration | Claims History               |
      | 5+ years         | No claims in the past 5 years |
    And I continue to the next step in driver information
    Given I have provided driver information
    When I select "Comprehensive" as the coverage type
    And I add "Roadside Assistance" as an add-on
    And I continue to the next step to premium estimate details
    Then I should see a premium estimate
    When I choose to proceed with the application
    Then I should arrive at the policy application step
    And the quote details should be pre-filled
