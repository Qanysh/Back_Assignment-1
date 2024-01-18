function validateForm() {
    var name = document.forms["bmiForm"]["Name"].value;
    var height = document.forms["bmiForm"]["Height"].value;
    var weight = document.forms["bmiForm"]["Weight"].value;

    console.log("Name:", name);
    console.log("Height:", height);
    console.log("Weight:", weight);

    if (name === "" || height === "" || weight === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!isNumeric(height) || !isNumeric(weight)) {
        alert("Height and weight must be valid numeric values");
        return false;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    console.log("Parsed Height:", height);
    console.log("Parsed Weight:", weight);

    if (height <= 0 || weight <= 0) {
        alert("Height and weight must be positive values");
        return false;
    }

    return true;
}
