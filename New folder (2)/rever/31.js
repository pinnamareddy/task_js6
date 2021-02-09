var x = function (value) {
    var c = [];
    console.log(value);
    var z = value.length;
    for (var i = z - 1; i >= 0; i--) {
        c[(z - 1) - (i)] = (value[i]);
    }
    console.log(c.join(""));
};
x(value=prompt("enter name"))
x("sai");
x("string");
