const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

describe('register Inputs', () => {

    test('register inputs should register username, password and age are correct', () => {
        ScooterApp.register("Simon", "password123", 33)
        // ScooterApp.register("James", "password456", 23)
        // ScooterApp.register("Abdalla", "password789", 20)
        console.log(ScooterApp.currentUsers)
        expect(ScooterApp.currentUsers.includes('Simon')).toBe(true)
    })
})

// log in

// add scooter

// remove scooter