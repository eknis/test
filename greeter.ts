
class Hello {
	public name; string;
	private _age: number;
	private _test: string;

	constructor(name: string) {
		this.name = name;
	}

	get age(): number {
		return this._age;
	}
	set age(value: number) {
		this._age = value;
	}

	get test(): string {
		return this._test;
	}
	set test(value: string) {
		this._test = value;
	}

	private getHelloString(): string {
		return "Hello, " + name + "!";
	}

	public say(): string {
		return this.getHelloString();
	}
}

var helloKei1 = new Hello("KEI");
helloKei1.age = 17;
var words = helloKei1.say();
var age = helloKei1.age;
