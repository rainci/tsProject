{
    function greet(person: string) {
        return `hello ${person}`
    }
    let name = 'Rainci';
    let user = [0, 1, 2];
    // document.body.innerHTML = greet(user) //TypeScript 编译的时候即使报错了，还是会生成编译结果
    document.body.innerHTML = greet(name)
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
        firstName:string;
        lastName:string;
    }
    function greeter(person : Person) {
        return `hello,${person.firstName} ${person.lastName}` 
    }
    
    let user = new Student("Jane", "M.", "User");
    
    document.body.innerHTML = greeter(user);
}
{
    function greetNamed(name: string): string {
        if(name){
            return `Hi,${name}`
        }
    }
}
