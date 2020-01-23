const posts = [
    {title: 'first post', body: 'This is my first postD'},
    {title: 'second post', body: 'This is my second postD'}
]

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>\n<p>${post.body}</p>`;
        })
        // document.body.innerHTML = output;
        let show = document.createElement('div');
        show.setAttribute('id', 'addpost');
        document.body.appendChild(show);
        document.getElementById('addpost').innerHTML = output;
        // let showPost = document.createTextNode(output);
        // show.appendChild(showPost);
        // document.show.inner;
    }, 2000);
}


function getData(){
    let newTitle = prompt('Enter the Title of post');
    let newBody = prompt('Enter the Body of post');
    posts.push({title: newTitle, body: newBody});
    alert('Your post added to the Posts');
}

// fetch('https://dog.ceo/api/breeds/image/random')
// .then(res => {
//     let l = res.json();
//     return l;
// })
// .then(r => {
//     console.log(r.message)
//     posts.push({title: 'Fetch Data', body: '<img src = "'+r.message+'">'});
//     getPost();
// })
// .catch(error => console.log(error));


function deletePost(){
    let deletePostTitle = prompt('Enter the title of post you want to delete : ');
    let deleteIndex;
    posts.forEach((items) => {
        if(items.title == deletePostTitle){
            deleteIndex =  posts.indexOf(items);
            console.log('hi');
        }
    });
    if (deleteIndex == undefined){
        alert(`Sorry! , ${deletePostTitle} is not present in the Data please check the title`);
    }
    else{
        posts.splice(deleteIndex,1);
        setTimeout(getPost(),3000);
        setTimeout(() => {
            alert('Post delete succsefully');
         }, 3000);
    }
}