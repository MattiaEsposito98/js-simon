console.log("Memorizza i numeri")

const playButton = document.getElementById('avvia')
const sendButton = document.getElementById('invia')
const countDown = document.getElementById('countdown')

let randomNumber1El = document.getElementById('random_num1') // HTMLElement
let randomNumber2El = document.getElementById('random_num2')
let randomNumber3El = document.getElementById('random_num3')
let randomNumber4El = document.getElementById('random_num4')
let randomNumber5El = document.getElementById('random_num5')
let displayInput = document.getElementById('input-group')
let formInput = document.getElementById("answers-form")
let listNumberRandom = document.getElementById('numbers-list')
let messaggio = document.getElementById('message')
let timer
let randomArray = []
let userArray = []
let totArray = []



playButton.addEventListener('click', function () {
  playButton.disabled = true
  sendButton.disabled = false

  //Num1
  const randomNum = (Math.floor(Math.random() * 50) + 1) // Number
  randomNumber1El.innerText = randomNum
  console.log(randomNumber1El)

  //num:2
  const randomNum2 = (Math.floor(Math.random() * 50) + 1)
  randomNumber2El.innerHTML = randomNum2
  console.log(randomNumber2El)

  //Num3
  const randomNum3 = (Math.floor(Math.random() * 50) + 1)
  randomNumber3El.innerHTML = randomNum3
  console.log(randomNumber3El)

  //Num4
  const randomNum4 = (Math.floor(Math.random() * 50) + 1)
  randomNumber4El.innerHTML = randomNum4
  console.log(randomNumber4El)

  //Num5
  const randomNum5 = (Math.floor(Math.random() * 50) + 1)
  randomNumber5El.innerHTML = randomNum5
  console.log(randomNumber5El)

  // Push elementi nell'array
  randomArray.push(randomNum, randomNum2, randomNum3, randomNum4, randomNum5)
  console.log(randomArray)



  // Gestiamo il timer
  count = 5
  countDown.innerText = count

  // incremento il tempo
  timer = setInterval(() => {

    if (count > 0) {
      countDown.innerText = --count

    } else if (count < 1) {
      formInput.classList.remove('d-none')
      listNumberRandom.classList.add('d-none')
    }

    else {
      clearInterval(timer)
    }
  }, 1000)

})



// 2 bottone Invia
sendButton.addEventListener('click', function () {
  //checkNumber()

  sendButton.disabled = true
  playButton.disabled = false

  const inputUser1 = document.getElementById("number1").value
  const inputUser2 = document.getElementById("number2").value
  const inputUser3 = document.getElementById("number3").value
  const inputUser4 = document.getElementById("number4").value
  const inputUser5 = document.getElementById("number5").value

  userArray = [inputUser1, inputUser2, inputUser3, inputUser4, inputUser5]
  console.log(userArray)

  score = 0

  // ciclo per vedere se il numero e corretto
  for (let i = 0; i < userArray.length; i++) {

    if (randomArray.includes(userArray[i])) {
      score++ 
      totArray.push(usersNumber);
    }
  }
  messaggio.innerText = `Hai indovinato ${score} numeri`

})


// function checkNumber() {

// }









