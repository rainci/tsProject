{
    function greet(person: string) {
        return `hello ${person}`
    }
    document.body.innerHTML = greet('Rainci')
}

{
    interface Person {
        firstName: string;
        lastName: string;
    }
    function greeter(person:Person){
        return `hello,${person.firstName} ${person.lastName}`
    }
    let user = {
        firstName: 'rainci',
        lastName: 'Liu'
    }
    document.body.innerHTML = greeter(user)
}

