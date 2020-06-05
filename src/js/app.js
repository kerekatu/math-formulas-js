const btnElements = document.querySelectorAll('.formula__btn')

const toggleFormula = (e) => {
  e.target.classList.toggle('formula__btn--active')
  e.target.nextElementSibling.classList.toggle('formula__content--active')
}

btnElements.forEach((btn) => {
  btn.addEventListener('click', (e) => toggleFormula(e))
})

const btnSubmit = document.querySelector('#circle-button-submit')

const calculations = {
  circle(r, d, c, a) {
    const rr = r || d / 2 || c / (2 * Math.PI) || Math.sqrt(a / Math.PI)
    const dd = d || rr * 2 || c * Math.PI || Math.sqrt((4 * a) / Math.PI)
    const cc =
      c ||
      2 * Math.PI * r ||
      Math.round(d * Math.PI * 10) / 10 ||
      Math.sqrt(Math.PI * a) * 2
    const aa =
      a ||
      Math.PI * Math.pow(r, 2) ||
      Math.PI * Math.pow(d / 2, 2) ||
      (Math.pow(c, 2) / 4) * Math.PI
    console.log(rr, dd, cc, aa)
    const resultElement = document.querySelectorAll('.formula__results')
    resultElement[0].innerHTML = `
     <p class="formula__result">${rr}</p>
     <p class="formula__result">${dd}</p> 
     <p class="formula__result">${cc}</p> 
     <p class="formula__result">${aa}</p>
     `
  }
}

const handleFormula = (type) => {
  const inputList = document.querySelectorAll(`[data-input=${type}-input]`)
  const inputs = Array.prototype.slice.call(inputList, 0)
  const values = inputs.map((input) => +input.value.trim())

  // calculations.circle(...values)
  if (calculations[type]) {
    calculations[type](...values)
  }
}

btnSubmit.addEventListener('click', () => handleFormula('circle'))
