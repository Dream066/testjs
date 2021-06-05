function getProduct(data) {
    const container = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('div')
    const price = document.createElement('div')

    container.appendChild(img)
    container.appendChild(title)
    container.appendChild(price)

    img.src = data.img
    title.textContent = data.name
    price.textContent = data.price

    container.classList.add('product')
    img.classList.add('product__img')
    title.classList.add('product__title')
    price.classList.add('product__price')

    return container
}

function appendData(data, selector) {
    if (!data?.length) return

    data.forEach(item => {
        const product = getProduct(item)
        document.querySelector(selector).appendChild(product)
    })
}

async function fetchData() {
    try {
        const response = await fetch('recs.txt')
        const text = await response.text()

        const data = JSON.parse(text)
        const [sidebar, footer] = data.placements

        appendData(sidebar?.recs, '.js-recommended-sidebar')
        appendData(footer?.recs, '.js-recommended-footer')
    } catch (error) {
        console.log(error)
    }
}

fetchData()