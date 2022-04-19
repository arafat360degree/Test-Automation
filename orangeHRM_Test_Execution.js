/// <reference types="cypress" />

describe('Orange-HRM-test-Case-Execution', () => {

    beforeEach(() => {
      // including it in our beforeEach function so that it runs before each test
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

   it('Login as Admin, Verify Dashboard Sections', () => {
        // Login as Admin with User Name and Password
        cy.login('admin',"admin123");

        //waiting to load dashboard
        cy.wait(500);

        //Checking Dashbpard Sections
        cy.get('#panel_resizable_0_0')
          .should('be.visible');
        
        cy.get('#panel_resizable_1_0')
          .should('be.visible');

        cy.get('#panel_resizable_1_1')
          .should('be.visible');

        cy.get('#panel_resizable_1_2')
          .should('be.visible');
      })

  it('Loading User list, Adding a new user', () => {

        // Login as Admin with User Name and Password
        cy.login('admin',"admin123");

        //waiting to load dashboard
        cy.wait(500);
        
        // Navigte to Admin > User Management> Users
        cy.get('#menu_admin_viewAdminModule')
          .click();

        //waiting to load users
        cy.wait(500);

        //Adding a new user
        cy.get('#btnAdd')
          .click();

        cy.get('#systemUser_userType')
          .select('Admin');

        cy.get('#systemUser_employeeName_empName')
          .type('Orange Test');

        cy.get('#systemUser_userName')
          .type('testemployee10');
          
        cy.get('#systemUser_status')
          .select('Disabled');

        cy.get('#systemUser_password')
          .type('63test49');

        cy.get('#systemUser_confirmPassword')
          .type('63test49');

        cy.get('#btnSave')
          .click();

        cy.wait(2000);
      })

  it('Editing Added User', () => {

        // Login as Admin with User Name and Password
        cy.login('admin',"admin123");

        //waiting to load dashboard
        cy.wait(500);
        
        // Navigte to Admin > User Management> Users
        cy.get('#menu_admin_viewAdminModule')
          .click();

        //waiting to load users
        cy.wait(500);

        //Editing added user
        cy.get('#resultTable')
          .contains('testemployee10')
          .click();
        cy.wait(500);

        cy.get('#btnSave')
          .click();
        cy.wait(500);

        cy.get('#systemUser_userName')
          .clear();
        cy.get('#systemUser_userName')
          .type('testemployee12');
          cy.wait(500);
        cy.get('#btnSave')
          .click();

        cy.wait(2000);

      }) 

   it('Searching Added User', () => {

        // Login as Admin with User Name and Password
        cy.login('admin',"admin123");

        //waiting to load dashboard
        cy.wait(500);
        
        // Navigte to Admin > User Management> Users
        cy.get('#menu_admin_viewAdminModule')
          .click();

        //waiting to load users
        cy.wait(500);

        //Searching added user
        cy.get('#searchSystemUser_userName')
          .type('testemployee12');
        cy.wait(500);

        cy.get('#searchBtn')
          .click();
        cy.wait(2000);

        cy.get('#resultTable')
        .contains('testemployee12')
        .click();
        cy.wait(500);

      }) 

      it('Deleting Added User', () => {

        // Login as Admin with User Name and Password
        cy.login('admin',"admin123");

        //waiting to load dashboard
        cy.wait(500);
        
        // Navigte to Admin > User Management> Users
        cy.get('#menu_admin_viewAdminModule')
          .click();

        //waiting to load users
        cy.wait(500);

        //Searching added user

        cy.get('#resultTable>tbody>tr').first().within(function(){
            cy.get('td').eq(0)
        })
        cy.wait(500);

      })

  })
  