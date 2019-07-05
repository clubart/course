// SL - nice - but the code related to app is a little strange... -5
var app = app || {}; // SL - app will definitely exist after line 1

// SL - and will always be reassigned to itself here
app = (function () { // SL - app not passed in here...
    'use strict';
    let count = 0;

    app.counter = function () {
        count++;
    };
    app.getCurrentCount = function () {
        return count;
    };

    return app;
}(app || {})); // SL - and passed in here

// SL - you mixed and matched some patterns here in a way that doesnt quite make sense.
// With line 1 in place, no need for line 16 and the return and the reassignment on line 4.
// app is always created on line 1 if it doesnt exist, and line 8 and 11 always add to that object
// the rest is useless.
// Alternatively, with line 1 gone - AND remeebring to take app as an in parameter in the IIFE, that would also make sense

// You mixed some things we did with our nested level example (app.utils) in a top level example (app)

