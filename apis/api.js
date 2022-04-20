let rootURL = 'https://api.spoonacular.com/food/search';
// let apiKey = "960a56684e694f368d9c171d7ee611c7"
// let apiKey = "59549953618242eca6fef142ef2b12ff"
// let apiKey = "6c527cca32154f339828ec1f3be9b427"
let apiKey = "84fd0783c32948a3bf19a4af52af45d5"

exports.product = (offset,number) => {
    let url = `${rootURL}?apiKey=${apiKey}&offset=${offset}&number=${number}`;
    return fetch(url).then(
        (resp)=>resp.json()
    )
}

exports.productCate = (query,offset,number)=>{
    let url = `${rootURL}?apiKey=${apiKey}&query=${query}&offset=${offset}&number=${number}`;
    return fetch(url).then(
        (resp)=>resp.json()
    )
}

exports.login = (username)=>{
    let url = `https://randomuser.me/api?seed=${username}`;
    return fetch(url).then(
        (resp)=>resp.json()
    )
}


// account
// trung@gmail.com
// people