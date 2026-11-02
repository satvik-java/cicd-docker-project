const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Calculator Backend is Running!");
});

app.post("/api/calculate", (req, res) => {

    const { num1, num2, operation } = req.body;

    let result;

    switch (operation) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                return res.status(400).json({
                    error: "Cannot divide by zero"
                });
            }
            result = num1 / num2;
            break;

        default:
            return res.status(400).json({
                error: "Invalid operation"
            });
    }

    res.json({ result });

});

app.listen(5000, "0.0.0.0", () => {
    console.log("Calculator backend running on port 5000");
});