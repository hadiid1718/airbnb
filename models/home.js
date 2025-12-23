const fs = require("fs")
const path = require("path")
const rootDir = require("../utils/pathUtils")
//fake dataase

     const homeDataFile = path.join(rootDir, 'data', 'Home.json')

module.exports = class Home{
    constructor(houseName, price, location, rating, imageURL){
      this.houseName = houseName;
      this.price = price;
      this.location = location;
      this.rating = rating;
      this.imageURL = imageURL;
    }
    save() {
      this.id = Math.random().toString()
      Home.fetchAll(registerHomes => {
     registerHomes.push(this)
     fs.writeFile(homeDataFile, JSON.stringify(registerHomes), error=> {
       console.log("Data Concluded", error)
     })
      })

    }
    static fetchAll(callback){
      const fileContent = fs.readFile(homeDataFile, (err,data)=> {
      console.log("File read:" , err, data)
      if(!err) {
        
          callback(JSON.parse(data))
      } else{
      callback([]) 
      }
      })
    }
  static findById(homeId, callback) {
  this.fetchAll(homes => {
    const home = homes.find(home => home.id.toString() === homeId.toString());
    callback(home);
  });
}

}