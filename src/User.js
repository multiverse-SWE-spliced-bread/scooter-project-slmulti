const ScooterApp = require ('./ScooterApp')
const Scooter = require ("./Scooter")

class User {
    // User code here

    constructor (username, password, age){
      this.username = username
      this.password = password
      this.age = age
      this.loggedIn = false
      this.isRenting = false
      this.currentScooter = []
    }

    rent_Scooter(scooter){

    if(this.currentScooter.length<1){
        this.currentScooter.push(scooter)
      }
      else{
        return 'You have reached your scooter limit'
      }

      if(scooter.isCharged === true && scooter.isBroken === false){
        scooter.isDocked = false
        this.isRenting = true
      }  
    }
    
    remove_Scooter(scooter){
      if(this.currentScooter.length==1){
        this.currentScooter.pop()
        this.isRenting = true
        scooter.isDocked = false
      }
    }

    dock_Scooter(scooter){
    

    }
    
  
  }


  
  module.exports = User