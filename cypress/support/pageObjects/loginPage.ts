//Declearing class in Home page
class LoginPage{

    getUsernameTextField()
    {
        return cy.get('input[placeholder="Username"]')
    }
    getPasswordTextField()
    {
        return cy.get('input[placeholder="Password"]')
    }
    getLoginBtn()
    {
        return cy.get('button[type="submit"]').click()
    }
    getLoginPageHeaderText()
    {   
        return cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('include.text', 'Dashboard')
    }  
    getNotLoginText()
    {
        return cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('include.text', 'Invalid credentials')
    } 
}
export default LoginPage;



