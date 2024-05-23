

let arr = new Array(9).fill(0), step = 1
const ttt = document.getElementById('ttt')
getField(arr)
const allDiv = document.querySelectorAll('#ttt >div')
ttt.addEventListener('click', getAction)
const restart = document.getElementById('restart')
restart.onclick = () => { location.reload() }

function getField(arr) {
  arr.forEach((el, ind) => {
    const div = document.createElement('div')
    div.setAttribute('data-n', ind)
    ttt.append(div)
  })
}

function getAction(e) {
  const targetElement = e.target
  const n = +e.target.getAttribute('data-n')
  if (arr[n] !== 0) return
  else {
    arr[n] = step
    draw()
    checkWinner()
    step = (step === 1) ? 2 : 1
    // targetElement.classList.add('active')
    // targetElement.innerText = '\u274c'
    // targetElement.innerText = '\u0030'
  }
}

function draw() {
  arr.forEach((el, ind) => {
    switch (el) {
      case 1: allDiv[ind].innerText = '\u274c'
        break
      case 2: allDiv[ind].innerText = '\u0030'
        break
    }
  })
}
function checkWinner() {
  const winnerArr = ['012', '345', '678', '036', '147', '258', '048', '246']

  let indexStep = []
  arr.forEach((item, ind) => {
    if (item === step) indexStep.push(ind)
  })
  for (let i = 0; i < winnerArr.length; i++) {
    const winnerPattern = winnerArr[i]
    let count = 0
    winnerPattern.split('').forEach(item => {
      if (indexStep.includes(+item)) count++
    })
    if (count === 3) {
      showWin(step)
      return
    }

  }
  if (!arr.includes(0)) showDraw()
}


// WINNER
function showWin(step) {
  const playerNumber = step === 1 ? 'X' : '0'
  console.log(`player- ${playerNumber} winner!`)
  alert(`playe- ${playerNumber} winner!`)
  ttt.removeEventListener('click')
  ttt.style.opacity = 0.5
  ttt.style.pointerEvents = 'none'
  // getField(arr)
}

// DRAW
function showDraw() {
  console.log('DRAW!')
  alert('DRAW!')
  ttt.removeEventListener('click')
  ttt.style.opacity = 0.5
  ttt.style.pointerEvents = 'none'
}