function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function makeProducts(product){

    // create div for each product
    const divProduct = document.createElement("div");
    divProduct.className = "productSquare";

    // create tag img to each product
    const imageProduct = new Image(200, 150);
    imageProduct.src = "https:"+product.image;
    imageProduct.alt = "logotipo do produto";

    // create label/text for product NAME
    const titleProduct = document.createElement("p");
    titleProduct.className = "nameProd";
    titleProduct.innerText = product.name;
    
    // create label/text for product DESCRIPTION
    const descriptionProduct = document.createElement("p");
    descriptionProduct.className = "descProd";
    descriptionProduct.innerText = product.description;

    // create label/text for product OLDPRICE
    const oldPrice = document.createElement("p");
    oldPrice.className = "oldPrice";
    oldPrice.innerText = "De: R$" + product.oldPrice;

    // create label/text for product PRICE
    const price = document.createElement("p");
    price.className = "price";
    price.innerText = "Por: R$" + product.price;

    // create label/text for product PRICE
    const portion = document.createElement("p");
    portion.className = "portion";
    portion.innerText = "ou 2x de R$9,99";
    
    // create button to product
    const buttonBuy = document.createElement("a")
    buttonBuy.className = "buttonBuy";
    buttonBuy.href = "#";
    buttonBuy.innerText = "Comprar"

    divProduct.append(imageProduct);
    divProduct.append(titleProduct);
    divProduct.append(descriptionProduct);
    divProduct.append(oldPrice);
    divProduct.append(price);
    divProduct.append(portion);
    divProduct.append(buttonBuy);

    return divProduct;
}

function getProducts(url){
    fetch(url).then(res => res.json()).then((out)=>{
        var productSquare = document.getElementById("product");
        for(const [i, element] of out.products.entries()){ 
            if(i>1){
                console.log("dfsdfsd");
                return 0;
            }else{
                var prod = makeProducts(element);
                productSquare.appendChild(prod);
            }
        }
        out.products.forEach(element => {
            var prod = makeProducts(element);
            productSquare.appendChild(prod);
        });
    }).catch(error =>{
        console.log(error);
        throw error;
    });
}

function main(){
    const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
    getProducts(url);
}

main();