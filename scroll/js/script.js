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



// !!!show & action
const option = {
  threshold: 0.5
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target
      targetElement.classList.add('active')
      const counters = targetElement.querySelectorAll('[data-counter]')
      counters.forEach(el => {
        animateCounter(el)
        observer.unobserve(entry.target) // проигрывается один раз
      })
    }
  })
},
  option
)

document.querySelectorAll('[data-content]').forEach((s) => observer.observe(s)
)

//! navigation
const navOption = {
  rootMargin: '0px',
  threshold: 0.4
}

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetElement = entry.target
      // const id = '#' + targetElement.id
      const id = targetElement.id
      const navList = document.querySelectorAll('.header__link')
      navList.forEach((link) => {
        // const href = link.getAttribute('href')
        const href = link.getAttribute('href').replace('#', '')
        link.classList.remove('current')
        if (href === id) link.classList.add('current')
      })
    }
  })
}, navOption)

document.querySelectorAll('section').forEach(s => sectionObserver.observe(s))

//! Image load
const option2 = {
  rootMargin: '50px 0px 0px ',
  // threshold: -0.3
}
// rootMargin: '100px 0px',

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src
      observer.unobserve(entry.target)
    }
  })

}, option2)


document.querySelectorAll('.about__bg img ').forEach(img => { imageObserver.observe(img) })

// !video
// video.muted
// video.currentTime
// video.play()
// video.pause()
const videoOptions = {
  rootMargin: '-200px 0px', //для видео лучше - так как видимость должна біть +-в центре
  threshold: 0
}
let videoObserver = new IntersectionObserver(([entry]) => {
  const video = entry.target
  // if (video.currentTime === 0) return //для пользователя если он не включал видео то оно и не будет воспроизводится
  // if (entry.isIntersecting || entry.intersectionRatio <= 0.2) video.pause()
  if (entry.isIntersecting) video.play()
  else video.pause()
}, videoOptions)
// { threshold: [0.2, 0.8] } // можно задавать как масив с параметрами
document.querySelectorAll('.video video').forEach(video => videoObserver.observe(video))


//! infinity load
const infinityObserverOptions = {
  threshold: 0.3
}
let page = 2
const infinityObserver = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    observer.unobserve(entry.target)
    loadPosts(page++)
  }
}, infinityObserverOptions)

const loadPosts = (page = 1) => {
  const body = document.querySelector('.posts__body')
  if (body) {
    // https://jsonplaceholder.typicode.com/posts?limit=&_page2
    // https://jsonplaceholder.typicode.com/todos/1
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page${page}`)
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const card = document.createElement('li')
          card.id = "card" + post.id
          card.classList = 'posts__item item-post'

          const title = document.createElement('h3')
          title.className = 'item-post__title'
          title.textContent = + post.id + ' ' + post.title
          card.append(title)

          const text = document.createElement('div')
          text.className = 'item-post__text'
          text.textContent = post.body
          card.append(text)
          body.append(card)
        })
        const lastCard = body.querySelector('.item-post:last-child')
        if (lastCard) infinityObserver.observe(lastCard)
      })
      .catch(console.error)
  }
}
loadPosts()

// !~!!!window.requestAnimationFrame(step)
//! intersectionRatio
