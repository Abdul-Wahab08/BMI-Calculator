const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const height = parseFloat(document.querySelector("#height").value.trim())
    const weight = parseFloat(document.querySelector("#weight").value.trim())
    const result = document.querySelector("#result")
    const category = document.querySelector('#category')

    if (height <= 0 || isNaN(height)) {
        result.textContent = "Please Enter a valid Height";
        result.textContent = "";
        return;
    }
    if (weight <= 0 || isNaN(weight)) {
        result.textContent = "Please Enter a valid Weight";
        result.textContent = "";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    result.textContent = `BMI is ${bmi}`

    if (bmi < 18.6) {
        category.textContent = "You are Underweight."
        category.style.color = "blue";
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        category.textContent = "You are Fit and Healthy."
        category.style.color = "green";
    }

    else {
        category.textContent = "You are Overweight."
        category.style.color = "red";
    }
})


