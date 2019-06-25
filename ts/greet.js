{
    function greet(person) {
        return "hello " + person;
    }
    var name_1 = 'Rainci';
    var user = [0, 1, 2];
    // document.body.innerHTML = greet(user) //TypeScript 编译的时候即使报错了，还是会生成编译结果
    document.body.innerHTML = greet(); //如果没有参数？，则参数必选，会报错
    document.body.innerHTML = greet(name_1);
    var greetNamed = function (name) {
        if (name) {
            return "Hi," + name;
        }
    };
    greetNamed('lyx');
    function sum(a, b, callback) {
        callback(a + b);
    }
    function add(foo, bar, foobar) {
        if (foobar === void 0) { foobar = 0; }
        return foo + bar + foobar;
    }
    //add() //报错，提示应该传2-3个参数
    // add函数改善，多个参数
    function adds() {
        var foo = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            foo[_i] = arguments[_i];
        }
        var result = 0;
        for (var i = 0; i < foo.length; i++) {
            result += foo[i];
        }
        return result;
    }
    // adds(）
    function getLength(something) {
        if (something.length) { //类型断言的用法，在需要断言的变量前加上 <Type> 即可 注：断言成一个联合类型中不存在的类型是不允许的
            return something.length;
        }
        else {
            return something.toString().length;
        }
    }
}
{
    //数据类型
    var isDone = true;
    var age = 2;
    var name_2 = 'lyx';
    var u = undefined;
    var n = null;
    // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量，而 void 类型的变量不能赋值给 number 类型的变量：
    // 这样不会报错
    var num = undefined;
    var myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
    var feibo = [1, 1, 2, 3, 5];
    var fei = [1, '1', 2, 3, 5];
    var fibonacci = [1, 1, 2, 3, 5];
    // let createdByNewBoolean: boolean = new Boolean(1) || Boolean(1); // new的话，会生成对象：Boolean {true} 会报错 直接Boolean(1)就是boolean值
}
// {
//     interface Person {
//         firstName: string;
//         lastName: string;
//     }
//     function greeter(person:Person){
//         return `hello,${person.firstName} ${person.lastName}`
//     }
//     let user = {
//         firstName: 'rainci',
//         lastName: 'Liu'
//     }
//     document.body.innerHTML = greeter(user)
// }
{
    var Student = /** @class */ (function () {
        function Student(firstName, middle, lastName) {
            this.firstName = firstName;
            this.middle = middle;
            this.lastName = lastName;
            this.fullName = firstName + " " + middle + " " + lastName;
        }
        return Student;
    }());
    var people = {
        firstName: '',
        gender: 1
    };
    // people.firstName = 'lyx';//报错，firstName是read-only
    function greeter(person) {
        return "hello," + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    document.body.innerHTML = greeter(user);
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.prototype.log = function (arg) {
            if (typeof console.log === 'function') {
                console.log(arg);
                return 123;
            }
            else {
                alert(arg);
            }
        };
        return Logger;
    }());
    var mysearch = void 0;
    mysearch = function (source, subString) {
        return source.search(subString) != -1;
    };
}
{
    function getName(n) {
        if (typeof n === 'string')
            return n;
        return n();
    }
    function handleEvent(ele, event) {
    }
    handleEvent(document.getElementById('hello'), 'click'); // 没问题
    // handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
}
{
    //元组
    var catx = void 0;
    catx = ['liu', 2];
    catx.push(3); //不报错 越界元素
    // catx.push(true) //报错 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
}
{
    // 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
    var Directions = void 0;
    (function (Directions) {
        Directions[Directions["Up"] = 0] = "Up";
        Directions[Directions["Down"] = 1] = "Down";
        Directions[Directions["Left"] = 2] = "Left";
        Directions[Directions["Right"] = 3] = "Right";
    })(Directions || (Directions = {}));
    console.log(Directions.Up === 0); //true
    console.log(Directions[0] === 'up');
    var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]; //编译结果： var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
}
