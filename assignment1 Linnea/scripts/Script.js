function displayText(){
    var text = document.getElementById("textField")
    text.style.display = "block";
}


function performDivision() {
    // Get the values of foo and bar
    let foo = parseFloat(document.getElementById("foo").value);
    let bar = parseFloat(document.getElementById("bar").value);

    // Divide
    let result = foo / bar;

    // Get the paragraph element where the result will be displayed
    let resultElement = document.getElementById("result");

    // Get the image element that will change based on the result
    let resultImage = document.getElementById("resultImage");


    // Is result is a valid number
    if (isNaN(result)) 
        {
        // If no, show alert and update the result
        alert("You can't divide us");
        resultElement.textContent = "noooo, you get the seal of disapproval!:(";
        
        resultImage.src = "./images/error_image.jpg";
        } 
    else 
        {
        // Otherwise, display the result
        resultElement.textContent = "Yippie, you get the seal of approval! The answer is: " + result;

        // Change  image to success image
        resultImage.src = "./images/success_image.jpg";
        }
}

