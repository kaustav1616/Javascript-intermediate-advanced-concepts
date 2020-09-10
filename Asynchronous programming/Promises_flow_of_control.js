/* to demonstrate: If a function (in this case, f1()) contains a promise that contains an asynchronous function
 * (in this case, setTimeout()), then the outer function (f1()) also behaves like an asynchronous function
 *
 * Flow of control (temporal precedence graph): 
 * callback function inside promise executes --> promise resolves and promise object returned 
 * --> outer function (f1()) finishes execution --> callback function inside then executes
 */

function f1()
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            console.log("checkpoint 1");
            resolve();
        }, 1000);
    });
};

f1()
    .then(function()
    {
        console.log("Function executed");
    });

console.log("checkpoint 2");