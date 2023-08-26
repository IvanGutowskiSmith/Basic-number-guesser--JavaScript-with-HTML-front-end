// your-script.js
document.addEventListener("DOMContentLoaded", function () {
  // Code to interact with the DOM once the page loads
  const button = document.getElementById("myButton");
  const textIn = document.getElementById("textBox");


  const output = document.getElementById("resultOutput");

  button.addEventListener("click", function () {
    const textInInt = parseInt(textIn.value);
    if (textInInt < 5) {
      output.textContent = "Too low"
      
    } else if (textInInt > 5){
      output.textContent = "Too high"
    }
    else{
      output.textContent = "Correct !"
    }
    });
});
