function getProducts(url){
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function makeProducts(products){

}

function main(){
    const url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
    var data = getProducts(url);
    result = JSON.parse(data);
    console.log(result);
}

main();