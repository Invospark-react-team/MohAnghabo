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

// result();
// let value;

// const result = () => new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(error => reject(error));
// })

// result().then((json) => {
//     value = JSON.stringify(json);
//     console.log(`value is ${value}`);
// }).catch(error => {
//     value = JSON.stringify(error);
//     console.log(`value is ${value}`);
// })

// upload Image #1 -> ImageOnelink
// upload Image #2 -> ImageTwolink
// upload Image #3 -> ImageThreelink
// function upload(num) {
//     return new Promise((resolve, reject) => {
//         resolve(setTimeout(() => {
//             (`https://images.com/${num}`);
//         }, 3000))
//     })
// }

// const images = []

// const image1 = upload('imageOne').then(imageLink => {
//     images.push(this)
// });
// const image2 = upload('imageTwo').then(imageLink => {
//     images.push(this)
// });
// const image3 = upload('imageThree').then(imageLink => {
//     images.push(this)
// });
// const image4 = upload('imageFour').then(imageLink => {
//     images.push(this)
// });

// Promise.all([image1, image2, image3, image4]).then(results => {
//     // [result1, result2, result3]
//     console.log(results);
// })

// console.log(images);

// ImageOneLink
// ImageTwolink
// ImageThreelink




// ============================ Promise All ===========================

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise1");
//     }, 4000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise2");
//     }, 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise3");
//     }, 2000);
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise4");
//     }, 3000);
// });


// Promise.all([promise1, promise2, promise3, promise4]).then((result) => {
//     // console.log(result);
// })

// // ==================== JSONPLACEHOLDER ===========================

// fetch('http://jsonplaceholder.typicode.com/posts/67')
//     .then(result => result.json())
//     .then(json => {
//         json.forEach(item => {
//             console.log({
//                 id: item.id,
//                 title: item.title
//             });
//         });
//     })


// {
//     commentID: id,
//     postID: id,
//     commentTitle: title,
//     postTitle: title
// }

// http://jsonplaceholder.typicode.com/posts/67
// http://jsonplaceholder.typicode.com/comments


// fetch('http://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(comment => {
//             fetch(`http://jsonplaceholder.typicode.com/posts/${comment.postId}`)
//                 .then(response => response.json())
//                 .then(post => {
//                     fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
//                         .then(response => response.json())
//                         .then(json => {
//                             console.log({
//                                 commentId: comment.id,
//                                 name: comment.name,
//                                 postTitle: post.title,
//                                 user: json.name
//                             })
//                         })

//                 })

//         });
//     })
async function getAllComments() {
    const response = await fetch('http://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();

    comments.forEach(async function (comment) {
        const commentData = await getCommentData(comment.id);
        console.log(commentData);
    });
}

async function getCommentData(commentID) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentID}`);
    const comment = await response.json();
    const post = await getPostData(comment.postId);
    return { id: comment.id, name: comment.name, postId: post.id, postTitle: post.title }
}

async function getPostData(postId) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    return { id: post.id, title: post.title }
}

getAllComments();