console.log("Memorizza i numeri")

const playButton = document.getElementById('playButton')
const countDown = document.getElementById('countdown')
let timer


playButton.addEventListener('click', function () {
  playButton.disabled = true

  // Gestiamo il timer
  count = 30
  countDown.innerText = count

  // incremento il tempo
  timer = setInterval(() => {
    if (count > 0){
      countDown.innerText = --count;
    } else
    countDown.innerText = 0
  }, 1000)

 

})

