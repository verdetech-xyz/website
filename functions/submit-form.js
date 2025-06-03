// Import required packages
const handlebars = require('handlebars');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

// Ensure URLSearchParams is available in Node.js environment
const {
  MAILGUN_API_KEY: api_key,
  MAILGUN_DOMAIN: domain
} = process.env;

const options = {
  auth: {
    api_key,
    domain
  },
  // host: 'api.eu.mailgun.net' // e.g. for EU region
};

const transporter = nodemailer.createTransport(mg(options));

// Function to process form submissions
exports.handler = async function(event, context) {
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

    // Helper functions for formatting data
    const formatTechnologies = (techs) => techs.join(', ');

    const formatTimeline = (timeline) => {
      const timelineMap = {
        '1_month': '1 month',
        '3_months': '3 months',
        '6_months': '6 months',
        'more_than_6': 'More than 6 months'
      };
      return timelineMap[timeline] || timeline;
    };

    const formatSiteType = (type) => {
      const typeMap = {
        'ecommerce': 'E-commerce',
        'blog': 'Blog',
        'portfolio': 'Portfolio',
        'institutional': 'Institutional'
      };
      return typeMap[type] || type;
    };

    // Create a Handlebars template for the email
    const emailTemplate = `
      <h2>New Project Brief Submission</h2>
      <p><strong>Name:</strong> {{name}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      {{#if company}}<p><strong>Company:</strong> {{company}}</p>{{/if}}
      <p><strong>Site Type:</strong> {{siteType}}</p>
      <p><strong>Technologies:</strong> {{technologies}}</p>
      <p><strong>Budget:</strong> ${{budget}}</p>
      <p><strong>Timeline:</strong> {{timeline}}</p>
      <h3>Project Requirements:</h3>
      <p>{{{requirements}}}</p>
    `;

    // Compile the template
    const template = handlebars.compile(emailTemplate);

    // Prepare the data for the template
    const templateData = {
      name: data.name,
      email: data.email,
      company: data.company,
      siteType: formatSiteType(data.siteType),
      technologies: formatTechnologies(data.technologies),
      budget: data.budget,
      timeline: formatTimeline(data.timeline),
      requirements: data.requirements.replace(/\n/g, '<br>')
    };

    // Generate the HTML content
    const emailContent = template(templateData);
    // Note: transporter is already set up at the top of the file with Mailgun

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@verdetech.com',
      to: process.env.EMAIL_TO || 'contact@verdetech.com',
      subject: `New Project Brief from ${data.name}`,
      html: emailContent,
      // You can add attachment options here if needed
      // attachments: [...]
    };

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully" }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      };
    } catch (error) {
      console.error("Error sending email:", error);

      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to send email" }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      };
    }
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
};

