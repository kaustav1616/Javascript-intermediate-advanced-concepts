var Rx = require('rxjs/Rx');

var date1 = new Date();
var time1 = date1.getTime();

var source = Rx.Observable.interval(400).take(5)
    .map(i => ["1", "foo", "2", "bar", "3"][i]);

// source.subscribe(x =>
//     {
//         var date2 = new Date();
//         var time2 = date2.getTime();
//         console.log("Diff in miliseconds: " + (time2 - time1));
//         time1 = time2;
//         console.log(x);
//     });
var date1 = new Date();
var time1 = date1.getTime();

var result = source
    .map(x => parseInt(x))
    .filter(x => !isNaN(x));
    // .reduce((acc, x) => (0, acc + x));

result.subscribe(x => 
    {
        var date2 = new Date();
        var time2 = date2.getTime();
        console.log("Diff in miliseconds: " + (time2 - time1));
        time1 = time2;
        console.log(x);
    });

console.log("Here");