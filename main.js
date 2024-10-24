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
let formInput = document.getElementById ("answers-form")
let listNumberRandom = document.getElementById('numbers-list')
let messaggio = document.getElementById('message')
let timer



playButton.addEventListener('click', function () {
  playButton.disabled = true
  sendButton.disabled = false
  //document.getElementById("answers-form").style.display = 'none'
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

  // Gestiamo il timer
  count = 5
  countDown.innerText = count
  // incremento il tempo
  timer = setInterval(() => {

    if (count> 0) {
      countDown.innerText = --count

    } else if (count<1) {
      formInput.classList.remove('d-none')
      listNumberRandom.classList.add('d-none')
    } 
    else {
      clearInterval(timer)
    }
      // 
  }, 1000)

  //  if (count === 0) {
  //    formInput.classList.remove('d-none')

  //  }
})





// 2 bottone
sendButton.addEventListener('click', function () {
  sendButton.disabled = true
  playButton.disabled = false

})






// function showInput () {
//   document.getElementById("answers-form").style.display = 'none'
// }

// setTimeout (showInput,5000) 
