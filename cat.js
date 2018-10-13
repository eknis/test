var Hello = (function () {
    function Hello(name) {
        this.name = name;
    }
    Object.defineProperty(Hello.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hello.prototype, "test", {
        get: function () {
            return this._test;
        },
        set: function (value) {
            this._test = value;
        },
        enumerable: true,
        configurable: true
    });
    Hello.prototype.getHelloString = function () {
        return "Hello, " + name + "!";
    };
    Hello.prototype.say = function () {
        return this.getHelloString();
    };
    return Hello;
}());
var helloKei1 = new Hello("計");
helloKei1.age = 17;
var words = helloKei1.say();
var age = helloKei1.age;
var List = (function () {
    function List() {
        this.data = [];
    }
    List.prototype.add = function (item) {
        this.data.push(item);
    };
    List.prototype.get = function (index) {
        return this.data[index];
    };
    return List;
}());
var dateList = new List();
dateList.add(new Date());
var d = dateList.get(0);
var nameList = new List();
nameList.add("kei");
var n = nameList.get(0);
var str = window.prompt('入力してください');
showStr(str);
function showStr(str) {
    alert(str);
}
function test() {
}
