// first demonstrate with promises, then demonstrate the same thing with async await

// Experiment with setting different values of 'doneFlag' in both doFirst() and doSecond()
function doFirst(actionToDoFirst)
{
    return new Promise(function(resolve, reject)
    {
        console.log(`Doing ${actionToDoFirst}`);

        const doneFlag = true;

        if(doneFlag)
            resolve("First thing done.");
        else    
            reject("First thing not done.");
    });
};

function doSecond(actionToDoSecond)
{
    return new Promise(function(resolve, reject)
    {
        console.log(`Doing ${actionToDoSecond}`);

        const doneFlag = false;

        if(doneFlag)
            resolve("Second thing done.");
        else    
            reject("Second thing not done.");
    });
};

// Step 1: demonstrate with promises
/*
doFirst("Brush teeth.")
    .then(function(firstActionPositiveResponse)
    {
        console.log(firstActionPositiveResponse);
        return doSecond("Go to bed.");
    })
    .catch(function(firstActionNegativeResponse)
    {
        console.log(firstActionNegativeResponse);
    })
    .then(function(secondActionPositiveResponse)
    {
        console.log(secondActionPositiveResponse);
    })
    .catch(function(secondActionNegativeResponse)
    {
        console.log(secondActionNegativeResponse);
    });
 */

// Step 2: demonstrate with async await (musch cleaner code and easier to visualize the sequence of events as it looks like synchronous code)
async function demo()
{
    try // all the code that could potentially fail (eg. unfulfilled promise)
    {
        /* await: all the code will wait till the function is completed 
         * return value: argument to resolve() in corresponding promise 
         */
        const firstActionPositiveResponse = await doFirst("Brush teeth."); // 'firstActionPositiveResponse' holds value with which Promise resolves
        console.log(firstActionPositiveResponse);
        const secondActionPositiveResponse = await doSecond("Go to bed.");
        console.log(secondActionPositiveResponse);
    }
    catch(error) // if any promise is unfulfilled, the argument to reject() in that promise gets passed to catch()
    {
        console.log(error);
    }
};

demo();