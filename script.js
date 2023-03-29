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
