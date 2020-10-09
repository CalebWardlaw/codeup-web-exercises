// (function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method

            // TODO: return the proper value
            return (Math.PI * (radius * radius));
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (circle.getArea % 1 !== 0){
               return Math.round(circle.getArea)
            } else {
                return (circle.getArea)
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is:" + circle.l);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
// })();
