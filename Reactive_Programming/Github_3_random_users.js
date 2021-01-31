var Rx = require("rxjs/Rx");
const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const jquery = require("jquery")(window);

var requestStream = Rx.Observable.of("https://api.github.com/users");
var responseStream = requestStream
                        .flatMap(requestURL => Rx.Observable.fromPromise(jquery.getJSON(requestURL)));

/* Function takes event stream that emits array of github users and returns 
 * event stream that emits one random user from that list.
 */
function returnRandomUserStream(responseStream)
{
    return responseStream.map(listUser =>
        listUser[Math.floor(Math.random() * listUser.length)]);
};

// 3 event streams that each emit a random user
var User1Stream = returnRandomUserStream(responseStream);
var User2Stream = returnRandomUserStream(responseStream);
var User3Stream = returnRandomUserStream(responseStream);

User1Stream.subscribe(user => console.log(user));
User2Stream.subscribe(user => console.log(user));
User3Stream.subscribe(user => console.log(user));