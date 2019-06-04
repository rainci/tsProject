{
    function greet(person) {
        return "hello " + person;
    }
    var name_1 = 'Rainci';
    document.body.innerHTML = greet(name_1);
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
    function greeter(person) {
        return "hello," + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    document.body.innerHTML = greeter(user);
}
