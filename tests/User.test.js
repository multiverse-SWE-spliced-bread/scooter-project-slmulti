const User = require('../src/User');

// User tests here

// test username

// test password

// test age

describe('the User Class', () => {

    test('username should be a string', () => {
        const user2 = new User("James", "password456", 23)
        expect(user2.username).toBe("")
    })

    test('password should be a string', () => {
        const user2 = new User("James", "password456", 23)
        expect(user2.password).toBe("")
    })

    test('Age should be a number', () => {
        const user2 = new User("James", "password456", 23)
        expect(user2.age).toBe()
    })
})
