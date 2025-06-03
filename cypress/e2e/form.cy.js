describe('Briefing Form Test', () => {
  beforeEach(() => {
    // Visit the page containing the form
    cy.visit('http://localhost:3000');
    
    // Mock the form submission API call to prevent actual form submission during testing
    cy.intercept('POST', '/api/submit-form', {
      statusCode: 200,
      body: { success: true, message: 'Form submitted successfully' }
    }).as('formSubmit');
  });

  it('should fill and submit the form successfully', () => {
    // Fill in the name field (this will make email appear)
    cy.get('input[type="text"][required]').type('Test User');
    
    // Fill in the email field (this will make company appear)
    cy.get('input[type="email"]').type('test@example.com');
    
    // Fill in the company field (optional)
    cy.get('input[v-model="form.company"]').type('Test Company');
    
    // Select a site type
    cy.get('input[value="institutional"]').check();
    
    // Select at least one technology
    cy.get('input[value="vuejs"]').check();
    
    // Enter budget
    cy.get('input[type="number"]').type('1000');
    
    // Select a timeline
    cy.get('input[value="1_month"]').check();
    
    // Enter requirements (at least 125 characters)
    cy.get('textarea').type('This is a detailed description of the project requirements. I need a website that showcases my products and services. It should have multiple pages, contact forms, and be responsive. Please make it look professional and modern.');
    
    // Submit the form
    cy.get('button[type="submit"]').click();
    
    // Wait for the API call to be intercepted
    cy.wait('@formSubmit');
    
    // Check for success alert
    cy.on('window:alert', (text) => {
      expect(text).to.contains('success');
    });
  });

  it('should display validation errors when form is submitted with invalid data', () => {
    // Submit the empty form
    cy.get('button[type="submit"]').click();
    
    // Check that validation errors are displayed
    cy.get('.text-red-500').should('be.visible');
  });
});

// Empty export to make this file a proper ES module
export {};
