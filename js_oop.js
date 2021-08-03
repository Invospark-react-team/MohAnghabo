// const user = {
//     name: "Mohammed",
//     age: "30",
//     role: "Teacher",
//     getUser: () => {
//         return this.name
//     }
// }

// const user1 = {
//     name: "Mahmoud",
//     age: "26",
//     role: "CEO"
// }

// console.log(user.getUser());

class User {
    constructor(username, userage) {
        this.name = username;
        this.age = userage;
        console.log(`New User, ${this.name}, ${this.age}`);
    }
    checkAge() {
        // if (this.age > 18) {
        //     console.log("the age is more than 18");
        // } else {
        //     console.log("the age is less than 18");
        // }

        this.age > 18 ? console.log("the age is more than 18") : console.log("the age is less than 18")
    }
}

const Mohammed = new User("Mohammed", 30);
const Mahmoud = new User("Mahmoud", 25)

Mohammed.checkAge();



// Class Person => Username, email, phone.
// getName, getEmail, getPhone, getUser