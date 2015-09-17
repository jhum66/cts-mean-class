// "use strict";

var x = "global";
function outer () {
    var y = "outer";

    function inner () {
        x = "inner";
    }
}

