const express = require("express");
const cors = require("cors");

const app = express();

// const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});



try {
    let transporter = nodemailer.createTransport({
        host: "mailhub.utc.com",
        port: 25,
        secure: true,
        auth: {
            user: "your-email@gmail.com",
            pass: "your-password",
        },
    });

    transporter.sendMail({
        from: '"CollinsAidTool" <your-email@gmail.com>',
        to: "shannonIT@utas.utc.com",
        subject: "Form Submission Details",
        html: `
            <h1>Form Submission Details</h1>
            <h2>This is a test</h2>
            <p>Form ID: ${id}</p>
            <p>Option A: ${optionA}</p>
            <p>Other A: ${otherA}</p>
            <p>Option B: ${optionB}</p>
            <p>Other B: ${otherB}</p>
            <p>Option A: ${desc}</p>
            <p>Option B: ${name}</p>    
          `,
    });

    console.log("Email sent");
} catch (error) {
    console.error("Error sending email: " + error.message);
}