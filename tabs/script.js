class Tabs {
  constructor(cardsList) {
    this.container = document.querySelector('.container')
    this.cardsBody = document.querySelector('.cards')
    this.cardsAbout = document.querySelector('.about')
    this.cardsList = cardsList
  }

  clickAction(e) {
    const targetElement = e.target
    if (targetElement.tagName === 'IMG') {
      for (const card of this.cards) card.classList.remove('active')
      targetElement.classList.add('active')
      this.showCharacter(targetElement)
    }
  }

  showCharacter(activeItem) {
    const id = activeItem.getAttribute('data-id')
    const characters = this.cardsList[id]
    this.cardsAbout.innerText = ''

    const name = document.createElement('p')
    name.innerText = characters.name
    const movie = document.createElement('p')
    movie.innerText = characters.movie
    const universe = document.createElement('p')
    universe.innerText = characters.universe
    this.cardsAbout.append(name)
    this.cardsAbout.append(movie)
    this.cardsAbout.append(universe)
  }
  render() {
    if (!this.container) return false
    for (const key in this.cardsList) {
      const image = document.createElement('img')
      image.src = `./images/${key}.png`
      image.setAttribute('data-id', key)
      this.cardsBody.append(image)
    }
    this.cards = this.cardsBody.querySelectorAll('img')

    this.cards[0].classList.add('active')
    this.showCharacter(this.cards[0])

    this.container.onclick = this.clickAction.bind(this)
  }
}
window.onload = () => {
  const tabs = new Tabs(cardsList)
  tabs.render()
}