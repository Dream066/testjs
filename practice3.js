document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')

    const arrayNumber = new Array(99).fill(1).map((n, i) => {
        let value = `${i}`
        if (i % 3 === 0) value += ' A/B'
        if (i % 5 === 0) value += ' Testing'

        return value
    })

    for (let i = 1; i <= 100; i++) {
        const el = document.createElement('div')
        el.textContent = i
        if (i % 3 === 0) el.textContent += ' A/B'
        if (i % 5 === 0) el.textContent += ' Testing'

        app.appendChild(el)
    }
})