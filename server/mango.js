var firebase = require('firebase')
var cron = require('node-cron')

var config = {
    apiKey: "AIzaSyCyoMPl5gMuKvPbnvGNbsVFGF0s6M7iCf8",
    authDomain: "mango-tree-35b.firebaseapp.com",
    databaseURL: "https://mango-tree-35b.firebaseio.com",
    projectId: "mango-tree-35b",
    storageBucket: "",
    messagingSenderId: "369520541468"
  };
  firebase.initializeApp(config);

  var database = firebase.database()

  class FruitTree {
    constructor() {
      this.fruit = []
      this.hight = 0
      this.healthStatus = true
      this.age = 0
      this.maxAge = 50
    }
    getFruits () {
      return this.fruit
    }
    getHight () {
      return this.hight
    }
    getHealthStatus () {
      return this.healthStatus
    }
    getAge () {
      return this.age
    }
    getMaxAge () {
    }
  }
