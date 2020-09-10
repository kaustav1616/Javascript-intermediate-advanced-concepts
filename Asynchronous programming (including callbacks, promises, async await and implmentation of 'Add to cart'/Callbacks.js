// objective: to synchronize (i.e. to execute according to some order of precedence) two asynchronous functions

const posts = [
    {id: 1, content: "This is post 1"},
    {id: 2, content: "This is post 2"}
];

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

function createPost(post, callback)
{
    // timeout set to 2s to mimic time delay of inserting post into server
    setTimeout(function()
    {
        // next 2 lines are executed in a synchronous fashion (objective is achieved)
        posts.push(post);
        callback();
    }, 2000);
};

createPost({id: 3, content: "This is post 3"}, getPosts);