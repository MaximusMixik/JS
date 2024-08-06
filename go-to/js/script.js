
function initGoTo() {
  const goToList = document.querySelectorAll('[data-go-to]')

  if (goToList.length) {
    goToList.forEach(goToItem => {
      goToItem.addEventListener('click', goToAction)
    })
  }
}

function goToAction(e) {
  e.preventDefault()
  const targetElement = e.target
  if (targetElement.hasAttribute('href') && targetElement.getAttribute('href') !== "#") {
    const blockId = targetElement.getAttribute('href')
    document.querySelector(blockId).scrollIntoView({ block: "start", behavior: "smooth" });
  }
  else {
    const nextSection = targetElement.closest('section').nextElementSibling
    nextSection.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

// ! цветовая тема

function darkTheme() {
  localStorage.setItem('color-theme', 'dark-theme')
  document.body.classList.add('dark')
}
function lightTheme() {
  localStorage.setItem('color-theme', 'light-theme')
  document.body.classList.remove('dark')
}

function colorTheme() {
  if (!localStorage.getItem('color-theme')) {
    localStorage.setItem('color-theme', 'light-theme')
    e.target.classList.add('light')
    lightTheme()
  }
  else darkTheme()

  document.querySelector('.theme-switch').addEventListener('click', () => {
    localStorage.getItem('color-theme') === 'light-theme' ? darkTheme() : lightTheme()
  })
}

// подсветка соответствуещего пункта меню
let intersection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) activeItem(entry.target)
  });
}, {
  rootMargin: '0px', threshold: 0.4
});

function activeItem(currentSection) {
  const itemList = document.querySelectorAll('.header__link')
  itemList.forEach((link) => {
    const isActive = currentSection.id === link.getAttribute('href').replace('#', '')
    link.classList.toggle('active', isActive)
  });
}

function inViewPort() {
  document.querySelectorAll('section').forEach((section) => { intersection.observe(section) })
}

// main initialization

window.onload = () => {
  initGoTo()
  colorTheme()

  inViewPort()
}



// переход с плавной прокруткой со страниц