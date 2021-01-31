var Rx = require("rxjs/Rx");
const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const jquery = require("jquery")(window);

var requestStream = Rx.Observable.of("https://api.github.com/users");
var responseStream = requestStream
                        .flatMap(requestURL => Rx.Observable.fromPromise(jquery.getJSON(requestURL)));

responseStream.subscribe(response => console.log(response));