'use strict'

// import ItemList from "./items.js"


async function getInfo() {
  try {
    const response = await fetch('./script/lib.json')

    if (response.ok) {
      await import('./items.js')
      const data = await response.json()
      const module = await import('./items.js')
      // const items = new ItemList(data).render()
      const items = new module.default(data).render()
    }
  }
  catch (err) {
    console.log(err.message)
  }
}

getInfo()

// window.onload = () => {}