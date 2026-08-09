require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = 3000;


// Middleware

app.use(cors());

app.use(express.json());


// Email transporter

const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 587,

    secure: false,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASSWORD

    }

});


// Email validation

const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Contact endpoint

app.post("/api/contact", async (req, res) => {


    // Get form data

    const {
        name,
        email,
        subject,
        message
    } = req.body;


    // Check required fields

    if (!name || !email || !message) {

        return res.status(400).json({

            success: false,

            message:
                "Name, email and message are required."

        });

    }


    // Check name length

    if (name.length > 100) {

        return res.status(400).json({

            success: false,

            message:
                "Name is too long."

        });

    }


    // Check email

    if (!emailRegex.test(email)) {

        return res.status(400).json({

            success: false,

            message:
                "Please provide a valid email address."

        });

    }


    // Check message length

    if (message.length > 5000) {

        return res.status(400).json({

            success: false,

            message:
                "Message is too long."

        });

    }


    console.log("Valid message received!");

    console.log({

        name,
        email,
        subject,
        message

    });


    // Send email

    try {

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            replyTo: email,

            subject:
                `Portfolio contact: ${subject}`,

            text: `
Name: ${name}

Email: ${email}

Message:

${message}
            `

        });


        // Tell frontend that email was sent

        res.json({

            success: true,

            message:
                "Your message has been sent!"

        });

    }


    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message:
                "The message could not be sent."

        });

    }

});


// Start server

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});