const posts = [
    {id: 1, content: "This is post 1"},
    {id: 2, content: "This is post 2"}
];

function createPost(post)
{
    // timeout set to 2s to mimic time delay of inserting post into server
    setTimeout(function()
    {
        posts.push(post);
    }, 2000);
};

function getPosts() // get all posts from server
{
    // timeout set to 1s to mimic time delay of fetching posts from server 
    setTimeout(function()
    {
        // looping through all posts
        posts.forEach((post, index) =>
        {
            console.log(post);
        })
    }, 1000);
};

// even though 'createPost()' is called before 'getPosts()', it takes longer to finish execution in an asynchronous manner
createPost({id: 3, content: "This is post 3"});
getPosts();