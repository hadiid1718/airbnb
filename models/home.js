const fs = require("fs")
const path = require("path")
const rootDir = require("../utils/pathUtils")
//fake dataase

module.exports = class Home{
    constructor(houseName, price, location, rating, imageURL){
      this.houseName = houseName;
      this.price = price;
      this.location = location;
      this.rating = rating;
      this.imageURL = imageURL;
    }
    save() {
      Home.fetchAll(registerHomes => {
     registerHomes.push(this)
     const homeDataFile = path.join(rootDir, 'data', 'Home.json')
     fs.writeFile(homeDataFile, JSON.stringify(registerHomes), error=> {
       console.log("Data Concluded", error)
     })
      })

    }
    static fetchAll(callback){
     const homeDataFile = path.join(rootDir, 'data', 'Home.json')
      const fileContent = fs.readFile(homeDataFile, (err,data)=> {
      console.log("File read:" , err, data)
      if(!err) {
        
          callback(JSON.parse(data))
      } else{
      callback([]) 
      }
      })
    }
}