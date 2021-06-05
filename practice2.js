document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.js-button')
    const title = document.querySelector('.js-title')

    button.addEventListener('click', () => {
        title.classList.toggle('hide')
    })
})