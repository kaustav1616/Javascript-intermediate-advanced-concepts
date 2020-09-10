/* explanation: 
 * "If the function in the .then handler returns a value, then the Promise resolves with that value. If the handler 
 * returns another Promise, then the original Promise resolves with the resolved value of the chained Promise. The 
 * next .then handler will always contain the resolved value of the chained promise returned in the preceding .then."
 * link to StackOverflow article: https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
 */

function learnDevelopment()
{
    return new Promise(function(resolve, reject)
    {
        console.log("Learnt development.");
        resolve();
    });
};

function buildProjects()
{
    return new Promise(function(resolve, reject)
    {
        console.log("Built projects.");
        resolve();
    });
};

function getJob()
{
    return new Promise(function(resolve, reject)
    {
        console.log("Got job.");
        resolve();
    });
};

learnDevelopment()
    .then(function()
    {
        return buildProjects()
    })
    .then(function()
    {
        return getJob();
    })
    .then(function()
    {
        console.log("Success.");
    });

/*
var promise = new Promise(function(resolve, reject)
{
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    
    if(x == y)
        resolve();
    else    
        reject();
});

promise
    .then(function()
    {
        return "Here."
    })
    .then(function(resolve)
    {
        console.log(resolve);
    });
 */