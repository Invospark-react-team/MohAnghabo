// const result = () => new Promise((resolve, reject) => {
//     if (false) {
//         resolve("some data");
//     } else {
//         reject("some other data")
//     }
// })


// result().then(something => {
//     console.log(`resolve has been called: ${something}`);
// }).catch((error) => {
//     console.log(`reject has been called: ${error}`);
// });


// result().then(result => {
//     console.log(`value = ${JSON.stringify(result)}`);
// }).catch()


// function result() {
//     console.log("We are fetching data from the internet");

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))

//     console.log("fetching is working .. ");

// }
let value;

const result = () => new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
})

result().then((json) => {
    value = JSON.stringify(json);
    console.log(`value is ${value}`);
}).catch(error => {
    value = JSON.stringify(error);
    console.log(`value is ${value}`);
})