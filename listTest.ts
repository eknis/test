class List<T> {
  private data: T[];
  constructor() {
    this.data = [];
  }

  add(item: T): void {
    this.data.push(item);
  }

  get(index: number): T {
    return this.data[index];
  }
}

var dateList = new List<Date>();
dateList.add(new Date());
var d = dateList.get(0);

var nameList = new List<string>();
nameList.add("kei");
var n = nameList.get(0);
