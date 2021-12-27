let items = [
    {
        name: "Ironhack T",
        price: 10,
        image: 'https://miro.medium.com/max/1400/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg'
    },
    {
        name: 'Ironhack Hoodie',
        price: 15, 
        image: 'https://pbs.twimg.com/media/Dj6_sb2X0AEumI0?format=jpg&name=4096x4096'
    },
    {
        name: 'Ironhack Sticker',
        price: 2, 
        image: 'http://www.conciti.org/wp-content/uploads/ironhack_logo.jpg'
    },
    {
        name: 'Ironhack Mug',
        price: 8,
        image: 'https://ih1.redbubble.net/image.457255839.8215/mug,standard,x1000,right-pad,750x1000,f8f8f8.u3.jpg'
    }
]

let cart = []

let list = document.querySelector('#items')

items.forEach((item, i)=>{ //buce muestra los elementos deln array items en pantalla
    console.log(item.name)
    console.log(i)
    list.innerHTML += `<li>
            <div>Name: ${item.name}</div>
            <div>Price: ${item.price}$</div>
            <img src="${item.image}" />
            <input type='number' placeholder='quantity' onchange='inputChange("${i}", "${item.name}", "${item.price}", "${item.image}") ' />
            <button>Buy Item</button>
            </li>`
})


function showCart(){ //la funcion va a rellenar el ul #cart creando un div con cada objeto de cart
    let cartItems = document.querySelector('#cart') //apunta al ul cart
    let grandTotal = 0;
    cartItems.innerHTML = '' //vacia cartItems (el ul) (si contuviera algo)

    cart.forEach((item, i)=>{ //bucle muestra la suma final sumando el total a grandTotal y  rellena el ul #cart creando un div por cada elemnto
        grandTotal += item.price*item.quantity
        cartItems.innerHTML += `<li>
                <div>Name: ${item.name}</div>
                <div>Quantity: ${item.quantity}
                <img src="${item.image}" />
                </li>`
    })

    document.querySelector('#grandTotal').innerHTML = '$'+ grandTotal; //inserta  la suma total arriba de grandTotal
}



function inputChange(i, name , price, image){
    console.log('I want to buy the', i,'item named, ', name, 'that cost $',price )
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button =listItem.querySelector('button')
    

    button.onclick = function(){// al pulsar el boton rellena cart con el objeto creado con los argumentos  de la función
        
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        }) 
        console.log(cart)
        showCart()
    }
    
    
}