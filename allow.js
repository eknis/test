var func1 = function (x, y) { return x + y; };
var func2 = function (x, y) { return x + y; };
function func3(x, y, logic) {
    return logic(x, y);
}
var logic;
logic = function (a, b) { return a * b; };
var ret = func3(2, 3, logic);
var ret2 = func3(2, 3, function (x, y) { return x * x * y * y; });
var Hoge = (function () {
    function Hoge() {
        var _this = this;
        this.func = function (age) {
            return _this.name + ":" + age.toString();
        };
    }
    return Hoge;
}());
