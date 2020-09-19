function f1()
{
    return new Promise(function(resolve, reject)
    {
        for(var i = 1; i <= 1000000; ++i);
        console.log("inside promise");
        resolve();
    });
};

f1()
    .then(function()
    {
        console.log("executed promise");
    });

console.log("outside promise");``