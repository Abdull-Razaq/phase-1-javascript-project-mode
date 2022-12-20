
// BaseUrl declaration
let dataUrl = "http://localhost:3000/books"

// Fetch API function
//  To render books to the school books catalogue section

function fetchData() {
    fetch(dataUrl)
    .then(respone => respone.json())
    .then((data) => { 
        data.forEach((books) =>{
            let li = document.createElement("li");
            li.textContent = books.title;
            li.addEventListener("click", (e)=>{
            let buttonContent = document.querySelector("button#booksPurchase")
              buttonContent.textContent = "Buy Book"
            let title = document.getElementById("bookTitle");
            title.textContent = books.title;
            let img = document.getElementById("imageHolder");
            img.src = books.image;
            let contentDescription = document.getElementById("contentDescription");
            contentDescription.textContent = books.description;
            let textBy = document.getElementById("textBy"); 
            textBy.textContent = "Author: " + books.author;
            let booksPurchased = document.querySelector("div#purchasingBook");
            booksPurchased.textContent = books["in-stock"] - books["sold"]
            })
            document.querySelector("ul#books").appendChild(li)
        })
    })
    }

fetchData();

function booksPurchase() {
    let btn = document.querySelector("button#booksPurchase")
    btn.addEventListener('click', ()=> {
        let currentListing = document.querySelector('div#purchasingBook')
        let number = parseInt(currentListing.textContent)

        if (number >= 1) {
            currentListing.textContent = currentListing.textContent - 1;
        } else {document.querySelector('button#booksPurchase').textContent = "Sold Out"
            alert("Sorry,the book is out of stock!")
    }
    })

    
}

booksPurchase();


// Patch Function

function updateBooks(book) {
    fetch(`http://localhost:3000/books/${books.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(resp => resp.json())
    .then(books => {console.log(books);})
}

document.querySelector('ul#books').addEventListener('click', ()=> {
    updateBooks(book);
})

// Delete function

function deleteBooks(book) {
    fetch(`http://localhost:3000/books/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(resp => resp.json())
    .then(books => {console.log(books);
    } )
}

document.querySelector('ul#books').addEventListener('click', ()=> {
    deleteBooks(book);
})


// If statement to check whether a user is a registered student

let buttonLog = document.getElementById('logBtn')

buttonLog.addEventListener("click", ()=> {
    let registeredEmail = "abdirizak@gmail.com"
    let registeredPassword = 1234

    let emailInput = document.getElementById('email2').value;

    let passwordInput = document.getElementById('pass2').value;
    // Adding an event listener to a button
    // Check whether the email and password input equal to our dummy credentials
    if (registeredEmail == emailInput) {
        if (registeredPassword == passwordInput) {
            alert("Successful login, Access granted!!")
        }
    }
    //  Unknown credentials
    else {
        alert("Kindly Sign Up.")
    }
})

// Sign up 


// Adding an event listener to a submit button 
let btn = document.getElementById('submitBtn')
btn.addEventListener('click', ()=> {
  alert("Thank you for your feedback")
})

// Adding an event listener to follow me button
//  In the subscription form

let btn2 = document.getElementById('followBtn')
btn2.addEventListener("click", ()=> {
  let subscribeEmail = document.getElementById('subscribe-field').value;
  // alert("Subscribe email is: " + subscribeEmail)
  alert(`Subscribed as ${subscribeEmail}`)
  // alert("thanks")
})






