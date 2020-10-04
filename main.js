(function () {
  // const appContainer = document.querySelector('#app')
  const submitButton = document.querySelector('#submit')
  const inputValue = document.querySelector('#input')
  const setsListContainer = document.querySelector('#sets-list')
  const timerButton = document.getElementById('timer-button')
  let interval

  submitButton.addEventListener('click', function (event) {
    resetDocument()

    setsListContainer.innerHTML = ''

    let totalNumber = inputValue.value

    if (totalNumber <= 1) {
      totalNumber = 2
    }

    const sets = generateSets(totalNumber)

    appendToList(sets)
    addTotalToApp(sets)
  })

  timerButton.addEventListener('click', function (event) {
    const timerInput = document.getElementById('timer-input')
    const timer = document.getElementById('timer')
    let currentVal = 0
    const timerValue = timerInput.value
    if (interval) {
      clearInterval(interval)
    }
    interval = setInterval(() => {
      currentVal += 1
      timer.innerHTML = timerValue - currentVal
      if (currentVal >= timerValue) {
        timer.innerHTML = ''
        clearInterval(interval)
      }
    }, 1000)
  })

  function generateSets (personalMax) {
    const percentages = [30, 40, 50]
    const result = []
    percentages.forEach(function (per) {
      const rep = Math.floor(personalMax - personalMax * (per / 100))
      result.push(rep)
    })
    return result
  }

  function appendToList (setArray) {
    setArray.forEach(function (item, index) {
      const li = document.createElement('li')
      li.innerHTML = 'Set ' + (index + 1) + ': ' + item
      setsListContainer.appendChild(li)
    })
  }

  function addTotalToApp (setArray) {
    const container = document.querySelector('#total-count-container')
    const p = document.createElement('p')
    const strong = document.createElement('strong')
    p.id = 'total-count'
    strong.innerText = 'Total Reps: '
    p.appendChild(strong)
    p.innerHTML += setArray.reduce((acc, item) => acc + item, 0)
    container.appendChild(p)
  }

  function resetDocument () {
    setsListContainer.innerHTML = ''

    const container = document.querySelector('#total-count-container')
    const totalP = document.querySelector('#total-count')

    if (totalP) {
      container.removeChild(totalP)
    }
  }
})()
