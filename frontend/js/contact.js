const form = document.getElementById("contact-form");


form.addEventListener("submit", async (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;

    const formMessage =
        document.getElementById("form-message");

    try {

        const response = await fetch(
            "http://localhost:3000/api/contact",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    name,
                    email,
                    subject,
                    message

                })

            }
        );


        const result =
            await response.json();


        formMessage.textContent =
            result.message;


    }
    catch (error) {

        console.error(error);

        formMessage.textContent =
            "Something went wrong. Please try again.";

    }


});