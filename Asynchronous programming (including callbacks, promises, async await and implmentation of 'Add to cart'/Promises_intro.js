var promise = new Promise(function(resolve, reject)
{
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";

    if(x == y)
        resolve("You are a geek.");
    else    
        reject("You are not a geek");
});

// console.log(str);

/* nice way to conceptualize: if resolve() has been called in the Promise object, callback function in 'then' will be executed;
 * if reject() has been called in the Promise object, callback function in 'catch' will be executed.
 */
promise
    .then(function(resolve_msg)
    {
        console.log(resolve_msg);
    })
    .catch(function(reject_msg)
    {
        console.log(reject_msg);
    });