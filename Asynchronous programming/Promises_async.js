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

function createPost(post)
{
    return new Promise(function(resolve, reject)
    {
        // timeout set to 2s to mimic time delay of inserting post into server
        setTimeout(function()
        {
            posts.push(post);
            
            const error = false;

            if(!error)
                resolve();
            else
                reject();
        }, 2000);
    });
};

/* objective fulfilled as function inside 'then' will only be executed after the callback function passed to promise has been executed
 * conceptualize: whichever asynchronous function is to be executed first in time should be placed inside callback function passed to promise
 * and whatever function to be executed second in time is to be placed inside 'then'
 */
createPost({id: 3, content: "This is post 3"})
    .then(function()
    {
        getPosts();
    })
    .catch(function()
    {
        console.log("Error.");
    });