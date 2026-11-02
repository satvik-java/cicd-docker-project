async function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    try {
        const response = await fetch("/api/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                num1: num1,
                num2: num2,
                operation: operation
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        document.getElementById("result").innerText =
            "Result: " + data.result;

    } catch (error) {
        document.getElementById("result").innerText =
            "Error: " + error.message;
    }
}