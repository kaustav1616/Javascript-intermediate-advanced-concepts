// objective: to synchronize (i.e. to execute according to some order of precedence) two asynchronous functions

/* function passed as a parameter to setTimeout() is called a 'callback' function because it is executed
 * after some event has finished executing (in this case, time delay of 3 s) or in essence, the function is
 * kept waiting and then 'called back' or 'called after' some other event is completed.
 */

const posts = [
    {id: 1, content: "This is post 1"},
    {id: 2, content: "This is post 2"}
];

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

createPost({id: 3, content: "This is post 3"}, getPosts);