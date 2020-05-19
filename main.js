let dieRolls = [];
let rollbutton = document.querySelector("#Roll");
let input = document.querySelector("#input");
let total = document.querySelector("#total");
let showallrolls = document.querySelector("#show-all-rolls");
let allrolls = document.querySelector("#all-rolls");
let counter = 0
let reset = document.querySelector("#reset-button");



rollbutton.addEventListener("click", function () {
  let userinput = input.value
  while (counter < userinput) {
    currentdiceroll = Math.floor(Math.random() * 6 + 1)
    dieRolls.push(currentdiceroll)
    counter++
  }
})
showallrolls.addEventListener("click", function () {
  let totalRolls = 0
  for (let counter2 = 0; counter2 < dieRolls.length; counter2++) {
    let numberRolled = dieRolls[counter2]
    const newDiceString = '<li class="dice">' + numberRolled + "</li>";
    allrolls.innerHTML += newDiceString
    totalRolls = totalRolls + numberRolled  

  }
  total.innerHTML += " " + totalRolls

  })

  reset.addEventListener("click", function () {
    dieRolls =[]
    total.innerHTML = ""
    allrolls.innerHTML =""
    input.value = ""
  }) 
  
