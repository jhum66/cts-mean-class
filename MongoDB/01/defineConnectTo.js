// defineConnectTo.js

/**
 * Connect to a database and set db.
 */
var connectTo = function(port, dbname) {
    if (!port) {
        port = 27017;
    }

    if (!dbname) {
        dbname = "test";
    }

    db = connect("localhost:"+port+"/"+dbname);
    return db;
};

// How to run this? Inside mongo shell.....
//
// typeof connectTo
// 
// load('defineConnectTo.js')
// 
// typeof connectTo