const bookApi = "https://striveschool-api.herokuapp.com/books"
const bookSpace = document.getElementById('bookSpace')

fetch(bookApi)
  .then(response => response.json())
  .then(data => {
    const books = data

    const row = document.createElement('div')
    row.classList.add('row')

    books.forEach(book => {
      const bookCard = document.createElement('div')
      bookCard.classList.add('col')

      const innerCard = document.createElement('div')
      innerCard.classList.add('card')

      const bookImg = document.createElement('img')
      bookImg.classList.add('card-img-top')
      bookImg.setAttribute('src', book.img)

      const bookTitle = document.createElement('div')
      bookTitle.classList.add('card-body')
      bookTitle.innerHTML = `<h5 class="card-title">${book.title}</h5>`

      const bookPrice = document.createElement('div')
      bookPrice.classList.add('card-footer')
      bookPrice.innerHTML = `<p class="card-text">Price: ${book.price}</p>`

      const addToCartButton = document.createElement('button')
      addToCartButton.classList.add('btn', 'btn-primary')
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => addToCart(book))

      const removeButton = document.createElement('button')
      removeButton.classList.add('btn', 'btn-danger')
      removeButton.textContent = 'Remove'
      removeButton.addEventListener('click', () => removeCard(bookCard))

      innerCard.appendChild(bookImg)
      innerCard.appendChild(bookTitle)
      innerCard.appendChild(bookPrice)
      innerCard.appendChild(addToCartButton)
      innerCard.appendChild(removeButton)

      bookCard.appendChild(innerCard)
      row.appendChild(bookCard)
    });

    bookSpace.appendChild(row)
  })
  .catch(error => console.error("Errore:", error))


function addToCart(book) {
  console.log(`Book "${book.title}" added to cart`)
}

function removeCard(card) {
  card.remove()
}
