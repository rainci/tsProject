{
    function greet(person: string) {
        return `hello ${person}`
    }
    let name = 'Rainci';
    document.body.innerHTML = greet(name)
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
