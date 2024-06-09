let btn = document.getElementById("btn");
btn.style.height ="30px";
let input = document.getElementById("my_input");
input.style.marginTop = "50px";
input.style.height = "25px";
input.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
let display = document.getElementById("display");
display.style.marginTop = "20px";
display.style.color = "#fff";
display.style.fontSize = "20px";
let design = document.getElementById("container");
design.style.background = "darkblue";
design.style.height = "500px";
design.style.width = "400px";
design.style.margin = "0 auto";
design.style.margin = "0 auto";
design.style.borderRadius = "10%";


function namota() {
    let inputValue = parseFloat(input.value);

    if (isNaN(inputValue) || inputValue === 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    display.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        let result = i * inputValue;
        display.innerHTML += inputValue + " x " + i + " = " + result + "<br>";
    }

    input.value = ''; 
}

btn.addEventListener("click", namota);
