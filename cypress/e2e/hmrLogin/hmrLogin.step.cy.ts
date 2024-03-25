import { Given,When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from '../../support/pageObjects/loginPage'

var loginPage = new LoginPage() 

//using scenario with dataTable:

Given(/^I open the hrm website$/, () => {
	//return true;
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When(/^I enter my username and password$/, (table: DataTable) => {
	
    var rows = table.rowsHash();
    loginPage.getUsernameTextField().type(rows.Username)
    loginPage.getPasswordTextField().type(rows.Password) 
    
});


When(/^I click on the login button$/, () => {
	
    loginPage.getLoginBtn() 
});

Then(/^I should be logged in$/, () => {
	
    loginPage.getLoginPageHeaderText()
});

//Unsucessful login scenario:

Given(/^I open the website-hmr$/, () => {
	//return true;
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}); 


When(/^I enters my invalid "([^"]*)" and "([^"]*)"$/, (args1: string,args2: string) => {
	console.log(args1,args2);
	//return true;
    loginPage.getUsernameTextField().type(args1)
    loginPage.getPasswordTextField().type(args2) 
});

When(/^I click the red login button$/, () => {
	//return true;
    loginPage.getLoginBtn() 
});

Then(/^I should not be logged in$/, () => {
	//return true;
    loginPage.getNotLoginText()
});

























