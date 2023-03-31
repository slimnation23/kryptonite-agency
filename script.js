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
const popup = document.querySelector('.popup__wrapper')
popup.addEventListener('click', () => (popup.style.display = 'none'))

$(document).ready(function () {
  const form = document.querySelector('#feedback')
  const formSubmit = document.querySelector('#feedback__submit')

  formSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const formName = document.querySelector('#feedback__name').value
    const formTelegram = document.querySelector('#feedback__telegram').value
    const formWebsite = document.querySelector('#feedback__website').value
    const formEmail = document.querySelector('#feedback__email').value
    const formSubject = document.querySelector('#feedback__subject').value
    const formBudget = document.querySelector('#feedback__budget').value
    const formMessage = document.querySelector('#feedback__message').value

    $.ajax({
      type: 'POST',
      url: 'post.php',
      data:
        'name=' + formName +
        '&telegram=' + formTelegram +
        '&website=' + formWebsite +
        '&email=' + formEmail +
        '&subject=' + formSubject +
        '&budget=' + formBudget +
        '&mes=' + formMessage,
      success: function () {
        console.log('success!')
      },
      error: function (err) {
        console.log('error')
      },
    })
    popup.style.display = 'block'

    form.reset()
  })
})
