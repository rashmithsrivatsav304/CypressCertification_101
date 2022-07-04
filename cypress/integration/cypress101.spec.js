
describe('cypress 101 Assesment',()=>{
    
    it('Test scenario 1',()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground')
        cy.get('a:contains("Drag & Drop Sliders")').click()
     
        cy.xpath('//*[@id="slider3"]/div/input').as('range').invoke('val', 95).trigger('change')
        cy.get('@range').siblings('output').should('have.text', '15')
       cy.screenshot()
    
    })
    
  
    it('Test scenario 2',()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground');
        cy.viewport('samsung-note9')
        cy.wait(5000)
        cy.get('a:contains("Input Form Submit")').click()
        cy.get('#seleniumform').should('be.visible')
        cy.get('#name').type('Rashmith')
        cy.get('#inputEmail4').type('rashmithrishi14@gmail.com')
        cy.get('#inputPassword4').type('password')
        cy.get('#company').type('cognizant')
        cy.get('#websitename').type('www.cognizant.com')
        cy.get('select').select('India')
        cy.get('#inputCity').type('Hyderabad')
        cy.get('#inputAddress1').type('address1')
        cy.get('#inputAddress2').type('address2')
        cy.get('#inputState').type('telangana')
        cy.get('#inputZip').type('6008020')
        cy.xpath('//*[@id="seleniumform"]/div[6]/button').click()
        cy.get('.success-msg').should('have.text', 'Thanks for contacting us, we will get back to you shortly.')
        cy.screenshot()    
    })

})