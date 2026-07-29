//alert("Connected")

// Example 1

document.getElementById("mychangebutton").
addEventListener('click' , function () {
    let hold = document.getElementById('Heading File')
    console.log(hold);
    hold.textContent =  "The paragraph has been Changed"
})

// Example 2  (TRANSVERSING THE ELEMENT)

document.getElementById('highlightfirstcity').
addEventListener('click' , function () {
    let hold = document.getElementById('CitiesList')
    hold.firstElementChild.classList.add('highlight')
})

// Example 3  (MANIPULATIN THE ELEMENT)

document.getElementById("changeorder").
addEventListener("click", function () {
        let coffeetype = document.getElementById("coffeetype")
        coffeetype.textContent = "Espresso"
        coffeetype.style.backgroundColor = "Yellow"
        coffeetype.style.padding = "5x"
        coffeetype.style.borderRadius = "1px"
        coffeetype.style.color = "Black"
})

// Example 4 (CREATING AND INSERTING ELEMENT)

document.getElementById("addNewItem").addEventListener("click", function (){
    let newitem =  document.createElement("li")
    newitem.textContent = "Eggs"

    document.getElementById("shoppinglist").appendChild(newitem)
})

// Example 5 (REMOVING DOM ELEMENT)

document.getElementById('removingbutton').addEventListener('click', function (){
    let button =  document.getElementById('taskllist')
    button.lastElementChild.remove()
})