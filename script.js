

const four = 4;

function add1(int) {
    return int + 1;
    four;
    const five = 5;
}

const noOfPersonsInput = document.querySelector("#no-of-persons");

noOfPersonsInput.addEventListener("change", (e) => {

    let numberOfPersons = (e.target.value);
    console.log("Wir brauchen folgende Zutaten für " + numberOfPersons + " Personen: ")

    const ingredients = document.querySelectorAll(".ingredient");
    for (let i = 0; i < ingredients.length; i++) {
        let current_ingredient = ingredients[i];
        const name = current_ingredient.dataset.name;
        let baseUnit = current_ingredient.dataset.baseUnit;
        const baseQuantity = current_ingredient.dataset.baseQuantity;
        const quantity = numberOfPersons * parseInt(baseQuantity);

        const cell = current_ingredient.querySelector("td:first-child")
        if (baseUnit === "g") {
            cell.innerHTML = quantity + "g"

        }
        else {
            cell.innerHTML = quantity
        }





        console.log(`${baseQuantity} ${baseUnit} ${name}\n`);
        //const listItems= document.querySelectorAll(".list_items")
        //listItems=console.log(`${baseQuantity} ${baseUnit} ${name}\n`);

    }



})


const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus")
const bookmarkButton = document.querySelector

plusButton.addEventListener("click", (e) => {
    const input = document.querySelector("input[type='number']")
    const value = parseInt(input.value);
    input.value = value + 1;
    input.dispatchEvent(new Event('change', { bubbles: true }));

});
minusButton.addEventListener("click", (e) => {
    const input = document.querySelector("input[type='number']")
    const value = parseInt(input.value);
    let newValue = value - 1
    if (newValue < 0) {
        newValue = 0
        alert("Portionen mengen können nich unter 0 gehen")
    }

    input.value = newValue;
    input.dispatchEvent(new Event('change', { bubbles: true }));



});





// select all ingredients

// set style attributes
// assign all ingredients to a variable => array

// find out how to loop through that array and e.g. set a stly 

// loop throgh all ingredients and output name and quantity


