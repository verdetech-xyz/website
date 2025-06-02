// Function to process form submissions
export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }

  try {
    // Parse the JSON body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'siteType', 'technologies', 'budget', 'timeline', 'requirements'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: `Missing required field: ${field}` }),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        };
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid email format" }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      };
    }

    // Validate requirements length
    if (data.requirements.length < 125) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Requirements must be at least 125 characters" }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      };
    }

    // Here you would typically send the form data to your email service or database
    // For example, you could use nodemailer to send an email or a database client to store the data
    
    // For now, just log the data and return a success response
    console.log("Form submission received:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    console.error("Error processing form submission:", error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }
}

