console.log("Memorizza i numeri")

const playButton = document.getElementById('avvia')
const countDown = document.getElementById('countdown')
let timer
let randomNumber1 = document.getElementById('random_num1')
let randomNumber2 = document.getElementById('random_num2')
let randomNumber3 = document.getElementById('random_num3')
let randomNumber4 = document.getElementById('random_num4')
let randomNumber5 = document.getElementById('random_num5')
let messaggio = document.getElementById('message')




playButton.addEventListener('click', function () {
  playButton.disabled = true

  // Gestiamo il timer
  count = 30
  countDown.innerText = count

  // incremento il tempo
  timer = setInterval(() => {
    if (count > 0) {
      countDown.innerText = --count

    } else
      countDown.innerText = 0
  }, 1000)

  //Numeri random
  const randomNum = (Math.floor(Math.random() * 49) + 1)
  randomNumber1 = randomNum
  randomNumber1.innerText = randomNum
  console.log(randomNumber1)

  const randomNum2 = (Math.floor(Math.random() * 49) + 1)
  randomNumber2 = randomNum2
  randomNumber2.innerHTML = randomNum2
  console.log(randomNumber2)

  const randomNum3 = (Math.floor(Math.random() * 49) + 1)
  randomNumber3 = randomNum3
  randomNumber3.innerHTML = randomNum3
  console.log(randomNumber3)

  const randomNum4 = (Math.floor(Math.random() * 49) + 1)
  randomNumber4 = randomNum4
  randomNumber4.innerHTML = randomNum4
  console.log(randomNumber4)

  const randomNum5 = (Math.floor(Math.random() * 49) + 1)
  randomNumber5 = randomNum5
  randomNumber5.innerHTML = randomNum5
  console.log(randomNumber5)


})

