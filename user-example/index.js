class User {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFirstName() {
        return this.firstName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user = new User('braedon', 'shruthi')

console.log(user.firstName)
console.log(user.getFirstName())
console.log(user.getFullName())
