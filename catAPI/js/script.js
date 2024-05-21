
class GenerateImage {
  constructor() {
    this.btn = document.querySelector('.api__button')
    this.image = document.querySelector('.api__image')
    this.url = 'https://api.thecatapi.com/v1/images/search'
    this.btn.onclick = this.action.bind(this)
  }
  async action() {
    try {
      let isLoaded = this.image.complete && this.image.naturalHeight !== 0
      if (isLoaded) {
        const response = await fetch(this.url)
        if (response.ok) {
          const data = (await response.json())[0]
          this.image.src = data.url
          this.image.id = data.id
          this.image.width = data.width
          this.image.height = data.height
        }
      }
    }
    catch (err) { alert(err.message) }
  }
}

window.onload = () => {
  const gen1 = new GenerateImage()
  gen1.action()
}
// fetch promise
//image.complete - загружено
// image.naturalHeight !== 0 - высота не равна 0
