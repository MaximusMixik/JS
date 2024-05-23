class Item {
  constructor({ name, age, src, secret, powers }) {
    this.name = name
    this.age = age
    this.src = src
    this.secret = secret
    this.powers = powers
  }

  render() {
    const body = document.createElement('div')
    body.className = 'card-body'
    const photo = document.createElement('img')
    photo.src = this.src
    photo.alt = this.name
    body.append(photo)

    const name = document.createElement('h2')
    name.textContent = this.name
    body.append(name)
    const age = document.createElement('h3')
    age.textContent = this.age
    body.append(age)


    const secret = document.createElement('h3')
    secret.textContent = this.secret
    body.append(secret)


    const powerList = document.createElement('ul')
    body.append(powerList)

    for (const listItem of this.powers) {
      console.log(listItem)
      const powItem = document.createElement('li')
      powItem.textContent = listItem
      powerList.append(powItem)
    }

    return body
  }
}

class ItemList {
  constructor(list) {
    this.list = list
  }
  render() {
    const cnt = document.body
    for (const el of this.list) {
      const item = new Item({ ...el }).render()
      cnt.append(item)
    }
  }
}

export { ItemList as default }
