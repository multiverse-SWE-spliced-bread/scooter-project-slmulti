const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here

  static scooterSessions = 0;

  static currentUsers = [];

   //reject registration is user already exists
  static register(username, password, age){

    const newUser = new User(username, password, age)

    if(ScooterApp.currentUsers.includes(newUser.username) == false){
      ScooterApp.currentUsers.push(newUser)
      return newUser
      } else
      throw new Error ("username already exists")
  }

  //login new user i ant to find the user from current users
  static login(username,password){

  const user = ScooterApp.currentUsers.find(u => u.username === username)
      if(!user){
        throw new Error('Please register First!')
      }
      if(user.password !== password){
        throw new Error('The Password is Wrong, please try again!')
      }
      user.loggedIn = true
  }

  addScooter(scooter){
//add scooter only if location and scooter instance is passed

  if(location&&scooterInstance){
    scooterSessions.push(scooter)
  }

  }

  removeScooter(){
//removes target scooter from matchin station array    
  }


}

const user1 = ScooterApp.register('simon@email.com', 'abc123', 33)
const user2 = ScooterApp.register('james@email.com', 'yellow123', 23)
const user3 = ScooterApp.register('james@email.com', 'yellow123', 23)

console.log(user1)
console.log(user2)

ScooterApp.login('simon@email.com', 'abc123')

console.log(user1)



ScooterApp.register(user3)
console.log(ScooterApp.currentUsers)




module.exports = ScooterApp;
