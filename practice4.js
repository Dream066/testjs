document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.js-input')
    const form = document.querySelector('.js-form')

    let number = Math.floor(Math.random() * 100)

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        if (+input.value > number) alert('введите число поменьше')

        if (+input.value < number) alert('введите число побольше')

        if (+input.value === number) {
            alert('вы угадали')

            if (confirm('хотите сыграть ещё?')) {
                number = Math.floor(Math.random() * 100)
            }
        }

        input.value = ''
    })

})
