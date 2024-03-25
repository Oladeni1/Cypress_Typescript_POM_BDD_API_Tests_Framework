Feature: Login to a website

  Scenario: Successful login with dataTable
    Given I open the hrm website
    When I enter my username and password
    |Key         | Value     |
    |Username    | Admin     |
    |Password    | admin123  |
    And I click on the login button
    Then I should be logged in



  Scenario Outline: Unsuccessful login with Examples data
  Given I open the website-hmr
  When I enters my invalid "<InvalidUsername>" and "<InvalidPassword>"
  And I click the red login button
  Then I should not be logged in

Examples:
|InvalidUsername    |InvalidPassword  |
|Admin5             |admin125         |