console.log(`hello`);




const allItems = (allBtn) =>{

    console.log(allBtn.innerHTML);


    div.innerHTML = ``

    axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML += `
        <img width="250" src="${item.image}" alt="product-image"/>
        <h1>${item.title}</h1>
        <h1>Price: ${item.price}
        $</h1>
        <h3>Rating: ${item.rating.rate}</h3>
        <h3>Rate: </h3>
        <p>Description: ${item.description}</p>
        <hr/>
        `
    })
}).catch((err)=>{
    console.log(err);
})

}


const div = document.querySelector('.div');

axios('https://fakestoreapi.com/products')
.then((res)=>{
    // console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML += `
        <img width="250" src="${item.image}" alt="product-image"/>
        <h1>${item.title}</h1>
        <h1>Price: ${item.price}
        $</h1>
        <h3>Rating: ${item.rating.rate}</h3>
        <h3>Rate: </h3>
        <p>Description: ${item.description}</p>
        <hr/>
        `
    })
}).catch((err)=>{
    // console.log(err);
})


const filteredItems = (btn) => {
    // console.log(btn.innerHTML);


    div.innerHTML = ``

    axios('https://fakestoreapi.com/products')
.then((res)=>{
    // console.log(res.data)
    res.data.filter(item => item.category === btn.innerHTML).map(item => {
        div.innerHTML += `
        <img width="250" src="${item.image}" alt="product-image"/>
        <h1>${item.title}</h1>
        <h1>Price: ${item.price}
        $</h1>
        <h3>Rating: ${item.rating.rate}</h3>
        <h3>Rate: </h3>
        <p>Description: ${item.description}</p>
        <hr/>
        `
    
    })
}).catch((err)=>{
    // console.log(err);
})}