var NS = function () {

    var a = function (v) {
        return v * v;
    }
    var b = function (v) {
        console.log("this is b" + a(v))
    }

    var multiply = function (x, y) {
        return x * y;
    }

    return {
        b: b,
        multiply: multiply
    }
}();


let myvalue = 5;
var b = function (v) {
    console.log("####################");
    NS.b(v);
    console.log("####################");
}
b(myvalue);


// NS.square = function (n) { return NS.multiply(n, n) }
NS.multiplyByTw = NS.multiply.bind(null, 2);

NS.square = function(n){
    return this.multiply(n,n);
};

console.log(NS.multiplyByTw(100));

console.log(NS.square(5))
