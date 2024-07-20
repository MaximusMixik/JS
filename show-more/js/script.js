
function hideItems(visibleItems, itemsList) {
  for (let i = visibleItems; i < itemsList.length; i++) {
    itemsList[i].classList.add('hide');
    if (itemsList[i].classList.contains('hide')) {
      hideItemWithTransition(itemsList[i]);
    }
  }
}

function showItemWithTransition(item) {
  item.style.display = 'block';
  item.style.height = '0px';
  setTimeout(() => {
    item.style.height = item.scrollHeight + 'px';
  }, 30);
  setTimeout(() => {
    item.style.height = 'auto';
  }, 400);
}

function hideItemWithTransition(item) {
  item.style.height = item.scrollHeight + 'px';
  setTimeout(() => {
    item.style.height = '0px';
  }, 30);
  setTimeout(() => {
    item.style.display = 'none';
  }, 400);
}

function initShowMore(showMoreBody) {
  const button = showMoreBody.querySelector('[data-show-more-button]');
  const itemsList = Array.from(showMoreBody.querySelectorAll('[data-show-more-list] > *'));
  const itemsCounter = Number(showMoreBody.querySelector('[data-show-more-list]').getAttribute('data-show-more-list'));

  let visibleItems = itemToShow = window.innerWidth <= 920 ? Math.round(itemsCounter / 2) : itemsCounter

  hideItems(visibleItems, itemsList);
  button.addEventListener('click', (e) => {
    const targetElement = e.target;

    if (itemToShow === itemsList.length) {
      itemToShow = visibleItems;
      hideItems(visibleItems, itemsList);
      targetElement.classList.remove('hide')
    } else {
      itemsList.forEach(item => {
        if (item.classList.contains('hide')) {
          item.classList.remove('hide');
          showItemWithTransition(item);
        }
        targetElement.classList.add('hide')
      });
      itemToShow = itemsList.length;
    }
  });
}


window.onload = () => {
  const showMoreBody = document.querySelectorAll('[data-show-more-block]');
  if (showMoreBody.length) {
    showMoreBody.forEach(item => {
      initShowMore(item);
    });
  }
}

// !optimize + scale

// function hideItems(visibleItems, itemsList) {
//   for (let i = visibleItems; i < itemsList.length; i++) {
//     itemsList[i].classList.remove('show-content');
//     itemsList[i].classList.add('hide');
//     hideItemWithTransition(itemsList[i]);
//   }
// }

// function showItemWithTransition(item) {
//   item.classList.remove('hide');
//   item.style.display = 'block';
//   setTimeout(() => {
//     item.style.transform = 'scale(1)';
//     item.style.opacity = '1';
//   }, 10); // небольшая задержка для запуска анимации
// }

// function hideItemWithTransition(item) {
//   item.style.transform = 'scale(0)';
//   item.style.opacity = '0';
//   setTimeout(() => {
//     item.style.display = 'none';
//   }, 500); // время соответствует transition в CSS
// }

// function initShowMore(showMoreBody) {
//   const button = showMoreBody.querySelector('[data-show-more-button]');
//   const buttonText = button.textContent;
//   const itemsList = Array.from(showMoreBody.querySelectorAll('[data-show-more-list] > *'));

//   let visibleItems = itemToShow = Number(showMoreBody.querySelector('[data-show-more-list]').getAttribute('data-show-more-list'));

//   if (itemsList.length <= visibleItems) {
//     button.classList.add('hide');
//   } else {
//     hideItems(visibleItems, itemsList);
//     button.addEventListener('click', (e) => {
//       const targetElement = e.target;

//       if (itemToShow === itemsList.length) {
//         itemToShow = visibleItems;
//         hideItems(visibleItems, itemsList);
//         targetElement.textContent = buttonText;
//       } else {
//         itemsList.forEach((item, index) => {
//           if (index >= visibleItems && item.classList.contains('hide')) {
//             showItemWithTransition(item);
//           }
//         });
//         itemToShow = itemsList.length;
//         targetElement.textContent = 'Hide';
//       }
//     });
//   }
// }

// window.onload = () => {
//   const showMoreBody = document.querySelectorAll('[data-show-more-block]');
//   if (showMoreBody.length) {
//     showMoreBody.forEach(item => { initShowMore(item); });
//   }
// }
