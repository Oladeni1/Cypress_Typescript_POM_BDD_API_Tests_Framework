import { Given,When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor"
import VechicleCheckPage from '../../support/pageObjects/vehicleCheckPage'

var vechicleCheckPage = new VechicleCheckPage() 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

//Invalid reg scenario:
Given(/^I open the mot website$/, () => {
    cy.visit ('https://vehicleenquiry.service.gov.uk/')
    cy.wait(3000)
});

When(/^I enters my invalid "([^"]*)"$/, (args1: string) => {
	
    vechicleCheckPage.getVechicleRegTextField().type(args1)
});

When(/^I click the continue button$/, () => {
	
    vechicleCheckPage.getContinueBtn()
    cy.wait(3000)
});

Then(/^I should see Vehicle reg is invalid$/, () => {
	
    vechicleCheckPage.getInvalidVehicleRegConfirmationText()
});

//valid reg scenario:

When(/^I enters my valid "([^"]*)"$/, (ValidVehicleReg: string) => {

	vechicleCheckPage.getVechicleRegTextField().type(ValidVehicleReg)
    
});


Then(/^I click the continued button$/, () => {

	vechicleCheckPage.getContinueBtn()
});


When(/^I check yes radio button$/, () => {
	vechicleCheckPage.getYesRadioBtn()
});

When(/^I click the yes continue button$/, () => {
	vechicleCheckPage.getYesContinueBtn()
    cy.wait(2000)
});

Then(/^I should see Vehicle reg is valid number$/, () => {
	vechicleCheckPage.getVehicleRegPlateConfirmation()
});
