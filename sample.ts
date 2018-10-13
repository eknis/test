interface lol {
    name: string;
    func1: (number) => void;
    func2: function;
    func3: number;
    func4: number;
}

var first: lol = {
    name: 'nameString',
    func1: ('ssss') => {console.log('func1')},
    func2: () => {func1()},
    func3: 1.3
}
