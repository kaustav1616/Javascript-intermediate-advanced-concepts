var Rx = require("rxjs/Rx");
const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const jquery = require("jquery")(window);

var requestStream = Rx.Observable.of("https://api.github.com/users");

// has nested subscribes (callback hell)
requestStream.subscribe(requestURL =>
    {
        /* method 1: define promise.done()
        jquery.getJSON(requestURL)
        .done(response => console.log(response));
         */

        // method 2: convert promise to observable and subscribe to observable
        var responseStream = Rx.Observable.fromPromise(jquery.getJSON(requestURL));

        responseStream.subscribe(response =>
            {
                console.log(response);
            });

    });