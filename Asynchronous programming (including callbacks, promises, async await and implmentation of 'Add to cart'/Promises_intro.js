var promise = new Promise(function(resolve, reject)
{
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";

    if(x == y)
        resolve();
    else    
        reject();
});

// console.log(str);

/* nice way to conceptualize: if resolve() has been called in the Promise object, callback function in 'then' will be executed;
 * if reject() has been called in the Promise object, callback function in 'catch' will be executed.
 */
promise
    .then(function()
    {
        console.log("You are a geek");
    })
    .catch(function()
    {
        console.log("You are not a geek");
    });