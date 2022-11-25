let num, x, y;
let num2;
function length(num, x, y) {
    if (x == "m") {
        if (y == "m") {
            num2 = num * 1;
        }
        else if (y == "mm") {
            num2 = num * 1000;
        }
        else if (y == "cm") {
            num2 = num * 100;
        }
        else if (y == "mi") {
            num2 = num * 0.000621371192;
        }
        else if (y == "in") {
            num2 = num * 0.001;
        }
        else if (y == "ft") {
            num2 = num * 3.2808399;
        }
        else if (y == "yd") {
            num2 = num * 1.0936133;
        }
        else if (y == "km") {
            num2 = num * 0.001;
        }
    }
    if (x == "cm") {
        if (y == "cm") {
            num2 = num * 1;
        }
        else if (y == "mm") {
            num2 = num * 10;
        }
        else if (y == "m") {
            num2 = num * 0.01;
        }
        else if (y == "mi") {
            num2 = num * 0.0000062137119223733;
        }
        else if (y == "in") {
            num2 = num * 0.39370078740157;
        }
        else if (y == "ft") {
            num2 = num * 0.032808398950131;
        }
        else if (y == "yd") {
            num2 = num * 0.010936132983377;
        }
        else if (y == "km") {
            num2 = num * 0.00001;
        }
    }
    if (x == "mm") {
        if (y == "mm") {
            num2 = num * 1;
        }
        else if (y == "cm") {
            num2 = num * 0.01;
        }
        else if (y == "m") {
            num2 = num * 0.001;
        }
        else if (y == "mi") {
            num2 = num * 0.0000062137119223733;
        }
        else if (y == "in") {
            num2 = num * 0.39370078740157;
        }
        else if (y == "ft") {
            num2 = num * 0.032808398950131;
        }
        else if (y == "yd") {
            num2 = num * 0.010936132983377;
        }
        else if (y == "km") {
            num2 = num * 0.000001;
        }
    }

    if (x == "km") {
        if (y == "km") {
            num2 = num * 1;
        }
        else if (y == "cm") {
            num2 = num * 100000;
        }

        else if (y == "m") {
            num2 = num * 1000;
        }
        else if (y == "mi") {
            num2 = num * 0.62137119223733;
        }
        else if (y == "in") {
            num2 = num * 39370.078740157;
        }
        else if (y == "ft") {
            num2 = num * 3280.8398950131;
        }
        else if (y == "yd") {
            num2 = num * 1093.6132983377;
        }
        else if (y == "mm") {
            num2 = num * 1000000;
        }


    }
    if (x == "in") {
        if (y == "in") {
            num2 = num * 1;
        }
        else if (y == "cm") {
            num2 = num * 2.54;
        }

        else if (y == "m") {
            num2 = num * 0.0254;
        }
        else if (y == "mi") {
            num2 = num * 0.000015782828282828;
        }
        else if (y == "km") {
            3
            num2 = num * 0.0000254;
        }
        else if (y == "ft") {
            num2 = num * 0.083333333333333;
        }
        else if (y == "yd") {
            num2 = num * 0.027777777777778;
        }
        else if (y == "mm") {
            num2 = num * 25.4;
        }



    }

    if (x == "ft") {
        if (y == "ft") {
            num2 = num * 1;
        }
        else if (y == "cm") {
            num2 = num * 30.48;
        }

        else if (y == "m") {
            num2 = num * 0.3048;
        }
        else if (y == "mi") {
            num2 = num * 0.00018939393939394;
        }
        else if (y == "km") {
            3
            num2 = num * 0.0003048;
        }
        else if (y == "in") {
            num2 = num * 12;
        }
        else if (y == "yd") {
            num2 = num * 0.33333333333333;
        }
        else if (y == "mm") {
            num2 = num * 304.8;
        }
    }


    if (x == "yd") {
        if (y == "yd") {
            num2 = num * 1;
        }
        else if (y == "cm") {
            num2 = num * 91.44;
        }

        else if (y == "m") {
            num2 = num * 0.9144;
        }
        else if (y == "mi") {
            num2 = num * 0.0009144;
        }
        else if (y == "km") {
            3
            num2 = num * 0.0009144;
        }
        else if (y == "in") {
            num2 = num * 36;
    
        }
        else if (y == "yd") {
            num2 = num * 0.33333333333333;
        }
        else if (y == "mm") {
            num2 = num * 914.4;
        }

    }


    if (x == "mi") {
        if (y == "cm") {
            num2 = num * 160934.4;
        }

        else if (y == "m") {
            num2 = num * 1609.344;
        }
        else if (y == "mi") {
            num2 = num * 0.0009144;
        }
        else if (y == "km") {
            3
            num2 = num * 1.609344;
        }
        else if (y == "in") {
            num2 = num * 63360.0000000000;
        }
        else if (y == "ft") {
            num2 = num * 5280;
        }
        else if (y == "mm") {
            num2 = num * 914.4;
        }
        else if (y == "mi") {
            num2 = num * 1;
        }

    }
    return (num2 + "("+y)+")";
}
console.log(length(1, "m", "yd"));