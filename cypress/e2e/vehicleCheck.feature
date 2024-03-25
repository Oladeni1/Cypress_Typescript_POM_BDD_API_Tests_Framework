Feature: Vechicle Reg Check

Scenario Outline: Invalid Vehicle Reg Check
Given I open the mot website
When I enters my invalid "<InvalidVehicleReg>"
And I click the continue button
Then I should see Vehicle reg is invalid

Examples:
|InvalidVehicleReg|
|CU57ABC          |



Scenario Outline: Valid Vehicle Reg Check
Given I open the mot website
When I enters my valid "<ValidVehicleReg>"
Then I click the continued button
And I check yes radio button
And I click the yes continue button
Then I should see Vehicle reg is valid number

Examples:
|ValidVehicleReg|
|YY55UVA        |