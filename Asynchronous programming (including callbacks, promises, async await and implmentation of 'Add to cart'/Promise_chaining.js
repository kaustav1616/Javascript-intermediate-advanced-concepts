/* explanation: 
 * .then() returns a Promise. If handler function of then() returns a value, then the Promise returned by then()
 * resolves with that value. If handler function returns an already resolved Promise, then Promise returned by then()
 * resolves with the resolved value of the Promise returned by the handler.
 * link to article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 */

function learnDevelopment() // makes a promise to caller to learn development
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
        return buildProjects(); // Promise returned by then() is resolved with the resolved value of the Promise returned from here
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
        return "Here." // Promise returned by then() is resolved with this value
    })
    .then(function(resolve)
    {
        console.log(resolve);
    });
 */