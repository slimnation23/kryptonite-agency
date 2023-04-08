//Menu
const menuBtn = document.querySelector('.menu-toggle')
const navlist = document.querySelector('.nav-list')

menuBtn.onclick = () => {
  navlist.classList.toggle('active')
}

//Scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

//Form
const form = document.getElementById('feedback')
const popup = document.querySelector('.popup__wrapper')
const footer = document.querySelector('.footer')

popup.addEventListener('click', () => (popup.style.display = 'none'))
form.addEventListener('submit', formSend)

function formSend(e) {
  e.preventDefault()

  const name = document.getElementById('feedback__name')
  const telegram = document.getElementById('feedback__telegram')
  const website = document.getElementById('feedback__website')
  const email = document.getElementById('feedback__email')
  const subject = document.getElementById('feedback__subject')
  const budget = document.getElementById('feedback__budget')
  const message = document.getElementById('feedback__message')

  let error = formValidate(form)

  if (error === 0) {
    footer.classList.add('_sending')

    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'server.php')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onload = () => {
      if (xhr.status === 200) {
        popup.style.display = 'block'
        form.reset()
        footer.classList.remove('_sending')
      } else {
        alert('There was an error sending the email.')
        footer.classList.remove('_sending')
      }
    }

    xhr.send(
      `name=${name.value}&telegram=${telegram.value}&website=${website.value}&email=${email.value}&subject=${subject.value}&budget=${budget.value}&message=${message.value}`
    )
  } else {
    alert("Заповніть обов'язкові поля")
  }
}

function formValidate() {
  let error = 0
  let formReq = document.querySelectorAll('._req')

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index]
    formRemoveError(input)

    if (input.classList.contains('._email')) {
      if (emailText(input)) {
        formAddError(input)
        error++
      }
    } else {
      if (input.value === '') {
        formAddError(input)
        error++
      }
    }
  }
  return error
}

function formAddError(input) {
  input.parentElement.classList.add('_error')
  input.classList.add('_error')
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error')
  input.classList.remove('_error')
}

function emailText(input) {
  return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    input.value
  )
}
