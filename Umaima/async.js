/*let answer;
const output = () => new Promise((resolve, reject) => {
    fetch (`https://jsonplaceholder.typicode.com/todos/1`)
    //when fetch true
    .then(response => response.json())
    //add jason data to resolve
    .then(jsondata => resolve(jsondata))

    //when fetch false
    .catch(error => reject(error))
    
})

output().then((jsondata) => {

    answer = JSON.stringify(jsondata);
    console.log(`value is ${answer}`);

}).catch(error => {
    answer = JSON.stringify(error);
    console.log(`value is ${answer}`);
})*/
/////////////////////
/*let postData;
const output = () => new Promise((resolve, reject) => {
    fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json => (console.log(json.id))
    //.then(postData => resolve(postData.id))
    //.catch(error => reject(error)
    }


output().then((post) => {

    postData = JSON.stringify(post);
    console.log(`value is  ${postData}`);

}).catch(error => {
    postData = JSON.stringify(error);
    console.log(`error is ${postData}`);
})*/

////////////////////////////////////////////////////////////
//works for one post
/*function fetchPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json.id))
           
            
        
          
}
fetchPostData();*/
///////////////////////////////


//console.log(`output is ${post.id}`)

//////////////////

//my work

/*function fetchCommentData(){
    fetch(`http://jsonplaceholder.typicode.com/comments`)
    .then(result => result.json())
    .then(json => {
        json.forEach(comment => {
            console.log({
                commentId: comment.id,
                commentTitile: comment.title, 
                postId: comment.postID
            })
           if(comment.postId == 67){
            fetchPostTitle()
               }
           
            
        });
        
    })
}

function fetchPostTitle(){
    fetch(`http://jsonplaceholder.typicode.com/posts/67`)
    .then(result => result.json())
    .then(json => console.log(json.title))
    }

function fetchPostData(){
    fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then(result => result.json())
    .then(json => {
        json.forEach(post => {
            console.log({
                postId: post.id,
                postTitile: post.title 

            })
            
        });
    })
}

fetchCommentData()
fetchPostData()*/

//////////////////
//correct answer

/*fetch (`http://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(json => {
    json.forEach(comment => {
        //to get rech post title, we use postId locate in comment, then we fwtch depends on it
        fetch(`http://jsonplaceholder.typicode.com/posts/${comment.postId}`)
        .then(response => response.json())
        .then(post => {
            console.log({
                commentId: comment.id,
                commentName: comment.name,
                postTitle: post.title
            });
        })
    });
})*/

/////////////////////////////////////////////
//task of what in slak

/*async function getAllComment() {
    const response = await fetch(`http://jsonplaceholder.typicode.com/comments`);
    const comments = await response.json();

    comments.forEach(async function (comment) {
        const commentData = await getCommentData(comment.id);
        console.log(commentData)
    });

}

async function getCommentData(commentID) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/comments/${commentID}`)
    const comment = await response.json();
    const post = await getPostData(comment.postId)
    return { id: comment.id, name: comment.name, postId: post.id, userId: post.userId }
}

async function getPostData(postId) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await response.json();
    return { id: post.id, userId: post.userId }
}

getAllComment();*/

//////////////////////////////////////////////
//task of meeting, username from post
//this function is to fetch all comments and store it in const comments as json file


async function getAllPosts() {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    // for each comment from comments above 
    posts.forEach(async function (post) {
        //pass parameter id 
        const postData = await getPostData(post.id);
        console.log(postData)
    });

}

async function getPostData(postID) {
    //here we fetch comment eith its id
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${postID}`)
    //store it as json file
    const post = await response.json();
    const user = await getUserData(post.userId)
    return { postId: post.id, userId: post.userId, userName: user.userName }

}

async function getUserData(userId) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await response.json();
    return {
        userId: user.id,
        userName: user.username
    }
}

getAllPosts();