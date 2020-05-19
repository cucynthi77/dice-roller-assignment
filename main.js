let dieRolls = [];
let rollbutton = document.querySelector("#Roll");
let input = document.querySelector("#input");
let total = document.querySelector("#total");
let showallrolls = document.querySelector("#show-all-rolls");
let allrolls = document.querySelector("#all-rolls");
let counter = 0
let reset = document.querySelector("#reset-button");var face0=new Image()

face0.src="d1.gif"
var face1=new Image()
face1.src="d2.gif"
var face2=new Image()
face2.src="d3.gif"
var face3=new Image()
face3.src="d4.gif"
var face4=new Image()
face4.src="d5.gif"
var face5=new Image()
face5.src="d6.gif"





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
    document.images["mydice"].src=eval("face"+randomdice+".src")


  }
  total.innerHTML += " " + totalRolls

  })

  reset.addEventListener("click", function () {
    dieRolls =[]
    total.innerHTML=""
    allrolls.innerHTML =""
    input.value = ""
  }) 
  
