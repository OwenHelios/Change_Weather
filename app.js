const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const c4 = document.querySelector('#c4')
const w1 = document.querySelector('#w1')
const w2 = document.querySelector('#w2')
const w3 = document.querySelector('#w3')
const w4 = document.querySelector('#w4')
const icon = document.querySelector('#w-icon')

c1.addEventListener('click', () => {
  icon.src = 'sunny.svg'
  w1.style.display = ``
  w2.style.display = `none`
  w3.style.display = `none`
  w4.style.display = `none`
})
c2.addEventListener('click', () => {
  icon.src = 'cloudy.svg'
  w1.style.display = `none`
  w2.style.display = ``
  w3.style.display = `none`
  w4.style.display = `none`
})
c3.addEventListener('click', () => {
  icon.src = 'rainy.svg'
  w1.style.display = `none`
  w2.style.display = `none`
  w3.style.display = ``
  w4.style.display = `none`
})
c4.addEventListener('click', () => {
  icon.src = 'snowy.svg'
  w1.style.display = `none`
  w2.style.display = `none`
  w3.style.display = `none`
  w4.style.display = ``
})