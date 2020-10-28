(function() {
    "use strict";

    // create a circle object

    // **************** START: The scope of the circle where we can use the THIS keyword starts here **************
    var circle = {
        radius: 3,

        getArea: function () {
            //set a variable to save the info
            //var circleArea = following line
            //can use this to refer to the object we are inside of
            return Math.PI * Math.pow(this.radius, 2);

        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            //create a variable to hold the area, while we check if we need to round or not

            var circleArea = this.getArea();

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


            //if do rounding is true, we are going to round,
            if (doRounding){
               circleArea = Math.round(circleArea);
            }


            console.log("Area of a circle with radius: " + this.radius + ", is:" + circleArea);
        }
    };

    // ***************** END: The scope of the circle where we can use the THIS keyword starts here **************

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius=5
    //this swap is possible because we have reassigned the variable
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
