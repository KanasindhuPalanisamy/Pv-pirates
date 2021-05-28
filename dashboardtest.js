import {MainPage} from '../integration/my_first_test'
const mainPage=new MainPage()
it('login test',function(){
    mainPage.navigate();
})

it('Dashboard test',function(){
    
    cy.get('.padd-left8', { timeout: 20000 })
    cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root', { timeout: 20000 }).click() //org-overview
    // cy.get(':nth-child(2) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root', { timeout: 20000 }).click() //member-overview
    // cy.get('.top-section > .MuiGrid-root > .MuiButtonBase-root', { timeout: 20000 }).click() //org-points-overview
    // cy.get('.table-wrapper > .MuiGrid-grid-sm-12 > .MuiGrid-root > .MuiButtonBase-root', { timeout: 20000 }).click() //transaction-overview
    // // cy.get('.active > div').click() //dashboard
    // cy.get('.manage-club-menu-item > a > div').click() //manage-org
    // cy.get('.manage-member-menu-item > a > div').click() //manage-members
    // cy.get('.refresh-menu-item > a > div').click() //transactions
    

})