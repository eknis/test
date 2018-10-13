let Hello = (function () {
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
let helloKei1 = new Hello("計");
helloKei1.age = 17;
let words = helloKei1.say();
let age = helloKei1.age;
let List = (function () {
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
let dateList = new List();
dateList.add(new Date());
let d = dateList.get(0);
let nameList = new List();
nameList.add("kei");
let n = nameList.get(0);
let str = window.prompt('入力してください');
showStr(str);
function showStr(str) {
    alert(str);
}
function test() {
}
