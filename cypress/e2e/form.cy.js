describe('Briefing Form Test', () => {
  beforeEach(() => {
    // Visit the page containing the form
    cy.visit('/');
    
    // Mock the form submission API call to prevent actual form submission during testing
    cy.intercept('POST', '/api/submit-form', {
      statusCode: 200,
      body: { success: true, message: 'Form submitted successfully' }
    }).as('formSubmit');
  });

  it('should fill and submit the form successfully', () => {
    // Debug: Log all form sections
    cy.get('form > div').then($divs => {
      console.log('Form sections:', $divs.length);
      $divs.each((i, el) => {
        console.log(`Section ${i}:`, el.outerHTML);
      });
    });

    // Fill in the name field (this will make email appear)
    cy.get('input[type="text"]').first().clear().type('Test User');
    
    // Check if the email field appears after name is filled
    cy.get('input[type="email"]').should('be.visible').clear().type('test@example.com');
    
    // Wait for form to update after email is filled
    cy.wait(1000);
    
    // Now get all visible text inputs and fill the third one (which should be company)
    // First is name, email is type=email, so company should be the second text input
    cy.get('input[type="text"]:visible').eq(1).clear().type('Test Company');
    
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

  it('should prevent submission when form has invalid data', () => {
    // Reset any previous intercepts
    cy.intercept('POST', '/api/submit-form', {
      statusCode: 200,
      body: { success: true, message: 'Form submitted successfully' }
    }).as('formSubmit');

    // Test Case 1: Submit the empty form (should not pass validation)
    cy.get('button[type="submit"]').click({ force: true });
    
    // Wait a moment to ensure any async operations complete
    cy.wait(1000);
    
    // Verify the form is still visible (we didn't navigate away)
    cy.get('form').should('be.visible');
    
    // Verify the API call was NOT made (form submission was prevented)
    cy.get('@formSubmit.all').then(interceptions => {
      expect(interceptions.length).to.equal(0);
    });
    
    // Test Case 2: Test with invalid email format
    // Fill out some basic fields first
    cy.get('input[type="text"]').first().clear().type('Test User');
    cy.get('input[type="email"]').should('be.visible').clear().type('invalid-email-format'); // Invalid email
    cy.get('input[type="text"]:visible').eq(1).clear().type('Test Company');
    cy.get('input[value="institutional"]').check();
    cy.get('input[value="vuejs"]').check();
    cy.get('input[type="number"]').clear().type('1000');
    cy.get('input[value="1_month"]').check();
    cy.get('textarea').clear().type('This is a detailed description of the project requirements. I need a website that showcases my products and services.');
    
    // Submit the form with invalid email
    cy.get('button[type="submit"]').click();
    
    // Wait a moment to ensure any async operations complete
    cy.wait(1000);
    
    // Verify the form is still visible and API call was NOT made
    cy.get('form').should('be.visible');
    cy.get('@formSubmit.all').then(interceptions => {
      expect(interceptions.length).to.equal(0);
    });
    
    // Test Case 3: Test with description too short
    // Fix the email to be valid
    cy.get('input[type="email"]').clear().type('test@example.com');
    // Add a very short description (assuming the form requires longer text)
    cy.get('textarea').clear().type('Too short description');
    
    // Submit the form with too short description
    cy.get('button[type="submit"]').click();
    
    // Wait a moment to ensure any async operations complete
    cy.wait(1000);
    
    // Verify the form is still visible and API call was NOT made
    cy.get('form').should('be.visible');
    cy.get('@formSubmit.all').then(interceptions => {
      expect(interceptions.length).to.equal(0);
    });
    
    // Test Case 4: Test with missing required fields
    // Reset form
    cy.reload();
    cy.wait(1000);
    
    // Mock the form submission again after reload
    cy.intercept('POST', '/api/submit-form', {
      statusCode: 200,
      body: { success: true, message: 'Form submitted successfully' }
    }).as('formSubmit');
    
    // Fill only some fields, leaving others empty
    cy.get('input[type="text"]').first().clear().type('Test User');
    cy.get('input[type="email"]').should('be.visible').clear().type('test@example.com');
    // Leaving company name empty
    // Leaving site type unselected
    cy.get('input[value="vuejs"]').check();
    cy.get('input[type="number"]').clear().type('1000');
    // Leaving timeline unselected
    
    // Submit the form with missing fields
    cy.get('button[type="submit"]').click();
    
    // Wait a moment to ensure any async operations complete
    cy.wait(1000);
    
    // Verify the form is still visible and API call was NOT made
    cy.get('form').should('be.visible');
    cy.get('@formSubmit.all').then(interceptions => {
      expect(interceptions.length).to.equal(0);
    });
    
    // Now verify we can fill and submit the form correctly after validation failure
    // Fill the form with valid data
    cy.get('input[type="text"]').first().clear().type('Test User');
    cy.get('input[type="email"]').clear().type('test@example.com');
    cy.get('input[type="text"]:visible').eq(1).clear().type('Test Company');
    cy.get('input[value="institutional"]').check();
    cy.get('input[value="vuejs"]').check();
    cy.get('input[type="number"]').clear().type('1000');
    cy.get('input[value="1_month"]').check();
    cy.get('textarea').clear().type('This is a detailed description of the project requirements. I need a website that showcases my products and services. It should have multiple pages, contact forms, and be responsive. Please make it look professional and modern.');
    
    // Submit the form with valid data
    cy.get('button[type="submit"]').click();
    
    // Wait for the API call - this should happen now that the form is valid
    cy.wait('@formSubmit');
    
    // Verify the API was called with the correct data
    cy.get('@formSubmit.all').then(interceptions => {
      expect(interceptions.length).to.equal(1);
    });
  });
});

// Empty export to make this file a proper ES module
export {};
