'use strict';

window.onload = function () {
  const body = document.querySelector('main')
  body.style.visibility = 'visible'

  const currentYear = new Date().getFullYear()
  const copyrightElement = document.querySelector('.copy')
  if (copyrightElement) {
    copyrightElement.innerHTML = `&copy; ${currentYear} daiki`
  }
}
