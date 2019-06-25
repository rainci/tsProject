{
    function greet(person?: string):string {
        return `hello ${person}`
    }
    let name = 'Rainci';
    let user = [0, 1, 2];
    // document.body.innerHTML = greet(user) //TypeScript 编译的时候即使报错了，还是会生成编译结果
    document.body.innerHTML = greet()//如果没有参数？，则参数必选，会报错
    document.body.innerHTML = greet(name)
    var greetNamed : (name : string) => string = function (name : string) : string { //在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
        if(name){
            return `Hi,${name}`
        }
    }
    greetNamed('lyx')

    function sum(a:number,b:number,callback:(result:number)=>void){
        callback(a+b)
    }

    function add (foo : number, bar : (number), foobar : number = 0) : number {
        return foo + bar + foobar
    }
    //add() //报错，提示应该传2-3个参数
    // add函数改善，多个参数
    function adds (...foo : number[]) : number {
        var result = 0;
        for(let i = 0; i < foo.length; i++){
            result += foo[i];
        }
        return result;
    }
    // adds(）
    function getLength(something: string | number): number { //联合类型，只能访问共同属性和方法
        if ((<string>something).length) {//类型断言的用法，在需要断言的变量前加上 <Type> 即可 注：断言成一个联合类型中不存在的类型是不允许的
            return (<string>something).length;
        } else {
            return something.toString().length;
        }
    }
}
{
    //数据类型
    let isDone: boolean = true;
    let age: number = 2;
    let name:string = 'lyx';
    let u: undefined = undefined;
    let n: null = null;
    // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量，而 void 类型的变量不能赋值给 number 类型的变量：
    // 这样不会报错
    let num: number = undefined;
    let myFavoriteNumber: any = 'seven';
        myFavoriteNumber = 7;
    let feibo:number[] = [1,1,2,3,5]
    let fei:(number|string)[] = [1,'1',2,3,5]
    let fibonacci: Array<number> = [1, 1, 2, 3, 5];    
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
    class Student {
        fullName:string;
        constructor(public firstName, public middle, public lastName){//在构造函数的参数上使用public等同于创建了同名的成员变量
            this.fullName = `${firstName} ${middle} ${lastName}`
        } 

    }
    interface Person {
        readonly firstName:string;
        lastName?:string;
        [propName: string]:any;//使用 [propName: string] 定义了任意属性取 string 类型的值
    }
    var people:Person = {
        firstName:'',
        gender:1, //如果没有[propName: string]:any; 就报错 gender不在Person中
    }
    // people.firstName = 'lyx';//报错，firstName是read-only
    function greeter(person : Person):string {
        return `hello,${person.firstName} ${person.lastName}` 
    }
    
    let user = new Student("Jane", "M.", "User");
    
    document.body.innerHTML = greeter(user);

    interface LogInterface {
        log(args:any):void;
    }
    class Logger implements LogInterface {
        log(arg){
            if(typeof console.log === 'function'){
                console.log(arg)
                return 123
            }else{
                alert(arg)
            }
        }
    }
    // var lo = new Logger()
    // 用接口定义函数的形状
    interface searchFn {
        (source:string,subString:string):boolean
    }
    let mysearch : searchFn;
    mysearch = function (source:string,subString:string) : boolean {
        return source.search(subString) != -1
    }
}
{
    // type 创建类型别名，类型别名常用于联合类型
    type Name = string;
    type Resolver = () => string;
    type NameOrResolver = Name | Resolver;
    function getName(n:NameOrResolver):Name {
        if(typeof n === 'string') return n;
        return n();
    }

    type EventName = 'click' | 'mousemove';
    function handleEvent(ele:Element,event:EventName){   
    }
    handleEvent(document.getElementById('hello'), 'click');  // 没问题
    // handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

}
{
    //元组
    let catx : [string,number]
    catx = ['liu',2]
    catx.push(3)//不报错 越界元素
    // catx.push(true) //报错 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
}
{
    // 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
    enum Directions {
        Up,
        Down,
        Left,
        Right
    }
    console.log(Directions.Up === 0)//true
    console.log(Directions[0] === 'up')
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]; //编译结果： var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
}
