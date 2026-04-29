show_symbol = document.getElementById("symbol")


function operation_option(x){
    if(x === "Sum"){
        show_symbol.textContent = "+"
    }
    else if(x === "Rest"){
        show_symbol.textContent = "-"
    }
    else if (x === "Multip"){
        show_symbol.textContent = "*"
    }
    else{
        show_symbol.textContent = "/"
    }
}

calculate_button = document.getElementById("calculate_button")
calculate_button.addEventListener("click", () => {
    operation_option(operation.value)})
