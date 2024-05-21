
class GenerateImage {
  constructor() {
    this.btn = document.querySelector('.api__button')
    this.imageBody = document.querySelector('.api__body')
    this.url = 'https://api.thecatapi.com/v1/images/search'
    this.btn.onclick = this.action.bind(this)
  }
  async action() {
    try {
      const response = await fetch(this.url)
      if (response.ok) {
        const data = await response.json()
        this.imageBody.innerText = ''
        const image = document.createElement('img')
        image.className = 'api__image '
        image.src = data[0].url
        image.id = data[0].id
        image.width = data[0].width
        image.height = data[0].height
        this.imageBody.append(image)
      }
    }
    catch (err) { alert(err.message) }
  }
}

window.onload = () => {
  const gen1 = new GenerateImage()
  gen1.action()
}