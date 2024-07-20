
function initShowMoreContent() {
  const showMoreContentList = document.querySelectorAll('[data-show-content-body')
  if (showMoreContentList.length)
    showMoreContentList.forEach(showMoreContentItem => {
      let button = showMoreContentItem.querySelector('[data-show-content-button]')
      button.addEventListener('click', (e) => {
        showMoreContentItem.classList.toggle('show-content')
      })
    });
  else return
}

window.onload = () => {
  initShowMoreContent()
}