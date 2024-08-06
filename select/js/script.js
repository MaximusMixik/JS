function removeActiveClass(selectBody) {
  const selectItemsList = selectBody.querySelectorAll('[data-select-value]')
  selectItemsList.forEach(item => {
    item.classList.remove('active-item')
  });
}

function changeSelectValue(selectBody) {
  const selectListBody = selectBody.querySelector('.custom-select__body')

  selectListBody.addEventListener('click', (e) => {
    const targetElement = e.target

    if (!targetElement.hasAttribute('data-select-value')) return

    const selectHeader = selectBody.querySelector('.custom-select__title')
    const currentTitle = selectHeader.textContent
    const selectedAttribute = targetElement.getAttribute('data-select-value')
    // const selectedAttribute = targetElement.textContent

    if (currentTitle !== selectedAttribute) {
      // const selectInputValue = selectBody.querySelector('.custom-select__input').value = selectedAttribute
      selectBody.querySelector('.custom-select__input').value = selectedAttribute

      removeActiveClass(selectBody)
      selectHeader.innerText = selectedAttribute
      // selectHeader.innerText = selectedAttribute
      targetElement.classList.add('active-item')
      selectBody.classList.toggle('open-select')
    }
  })
}

function initSelect() {
  const selectBody = document.querySelector('.custom-select')
  if (!selectBody) return

  const button = selectBody.querySelector('button')

  // закриття при кліку по-за межами випадаючого списку
  document.addEventListener('click', (e) => {
    if (e.target === button) {
      selectBody.classList.toggle('open-select')
      if (!selectBody.classList.contains('open-select')) return
      changeSelectValue(selectBody)
    }
    else if (!selectBody.contains(e.target)) {
      selectBody.classList.remove('open-select');
    }
  });
  // Якщо не потрібне закриття по-за межами
  // button.addEventListener('click', (e) => {
  //   selectBody.classList.toggle('open-select')
  //   if (!selectBody.classList.contains('open-select')) return
  //   changeSelectValue(selectBody)
  // })
}

window.onload = () => {
  initSelect()
}

