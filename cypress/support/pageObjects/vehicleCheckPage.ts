class VechicleCheckPage{

    getStartNowBtn()
    {
        return cy.get('.gem-c-button.govuk-button.govuk-button--start').click()
        
    }
    getVechicleRegTextField()
    {
        return cy.get('.govuk-input.govuk-input--width-10')
    }
    getContinueBtn()
    {
        return cy.get('#submit_vrn_button').click()   
    }
    getInvalidVehicleRegConfirmationText()
    {
        return cy.get('.govuk-heading-l.info-panel').should('include.text', 'Vehicle details could not be found')
    }
    getYesRadioBtn()
    {
        return cy.get('#yes-vehicle-confirm').click()
    }
    getYesContinueBtn()
    {
        return cy.get('#capture_confirm_button').click()
    }
    getVehicleRegPlateConfirmation()
    {
        return cy.get('.reg-mark').should('be.visible')
    }



}
export default VechicleCheckPage;