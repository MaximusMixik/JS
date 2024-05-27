

// function addShowClasses() {
//   const showItems = document.querySelectorAll('.show-item')
//   showItems.forEach(el => {
//     const sectionCord = el.closest('section').offsetHeight / 2 + 100
//     console.log(window.scrollY)
//     if (sectionCord)
//       // el.offsetHeight
//       console.log(section)
//   })

// }

// addShowClasses()

window.addEventListener('load', windowLoad())

function windowLoad(counterItems) {
  document.body.classList.add('loaded')
  // const counterElements = counterItems ? counterItems : document.querySelectorAll('[data-counter]')
  // if (counterElements.length) {
  //   counterElements.forEach(counterEl => {
  //     animateCounter(counterEl)
  //   });
  // }
}


function animateCounter(counterEl) {
  let startTimestamp = null
  const duration = parseInt(counterEl.dataset.counter) ? parseInt(counterEl.dataset.counter) : 1000
  const startValue = parseInt(counterEl.innerHTML)
  const startPosition = 0
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    counterEl.innerHTML = Math.floor(progress * (startPosition + startValue))
    if (progress < 1) window.requestAnimationFrame(step)
  }
  window.requestAnimationFrame(step)

  // My version
  // const elContent = +counterEl.textContent.split(' ').join('')
  // console.log(elContent)
  // counterEl.innerText = ''
  // let i = 0
  // let myInterval = setInterval(() => {
  //   if (i <= elContent) counterEl.innerText = `${i++}`
  //   else clearInterval(myInterval)
  // }, 20)
}

// let options = {
//   threshold: 0.3
// }
// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const targetElement = entry.target
//       // console.log(targetElement)
//       const digitsCounterItems = targetElement.querySelectorAll('[data-counter')
//       const body = targetElement.querySelector('.show-item')
//       body.classList.toggle('active')
//       if (digitsCounterItems.length) {
//         digitsCounterItems.forEach(counterEl => {
//           animateCounter(counterEl)
//         });
//         // Вимкнути спостереження після першого відпрацювання
//         observer.unobserve(targetElement)
//       }
//     }
//   })
// }, options)

// let sections = document.querySelectorAll('.about')
// if (sections.length) {
//   sections.forEach(section => {
//     observer.observe(section)
//   })
// }


// !~!!!window.requestAnimationFrame(step)
//! IntersectionObserver

// const options = {
//   // root: document.querySelector("#section2"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };
// const callback = function (entries, observer) {
//   console.log(observer)
//   console.log(entries)
//   console.log(target)

// };
// const observer = new IntersectionObserver(callback, options);
// const target = document.querySelector("#section2");
// observer.observe(target);

// !!!111
const option = {
  threshold: 0.5
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target


      // const id = '#' + targetElement.id
      const id = targetElement.id
      const navList = document.querySelectorAll('.header__link')
      navList.forEach((link) => {
        // const href = link.getAttribute('href')
        const href = link.getAttribute('href').replace('#', '')
        href === id ? link.classList.add('current') : link.classList.remove('current')
      })

      const content = targetElement.querySelector('[show-content]')
      content.classList.add('active')

      const counters = targetElement.querySelectorAll('[data-counter]')
      counters.forEach(el => {
        animateCounter(el)
        observer.unobserve(entry.target) // проигрывается один раз
      })
    }
  })
},
  option // option
)

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section)
})




const option2 = {
  rootMargin: '-100px 0px 0px ',
  // threshold: -0.3
}

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src
      observer.unobserve(entry.target)
    }
  })

}, option2)


document.querySelectorAll('img').forEach(img => { imageObserver.observe(img) })