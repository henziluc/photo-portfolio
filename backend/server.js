const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;
app.use(cors());


app.use(express.json());


const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


app.post("/api/contact", (req, res) => {

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

            message: "Name, email and message are required."

        });

    }


    // Check name length

    if (name.length > 100) {

        return res.status(400).json({

            success: false,

            message: "Name is too long."

        });

    }


    // Check email

    if (!emailRegex.test(email)) {

        return res.status(400).json({

            success: false,

            message: "Please provide a valid email address."

        });

    }


    // Check message length

    if (message.length > 5000) {

        return res.status(400).json({

            success: false,

            message: "Message is too long."

        });

    }


    console.log("Valid message received!");

    console.log({
        name,
        email,
        subject,
        message
    });


    res.json({

        success: true,

        message: "Message received successfully."

    });

});


app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});