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
