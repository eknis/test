interface IAnimal {
  name:  string;
  makeSound(): string;
}

class Cat implements IAnimal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public makeSound(): string {
    return "nyaaaa";
  };
}


var myCat : IAnimal;
myCat = new Cat("kotetu");

var sound = myCat.makeSound();
