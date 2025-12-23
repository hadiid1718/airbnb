const fs = require("fs")
const path = require("path")
const rootDir = require("../utils/pathUtils")
//fake dataase

     const favouriteDataFile = path.join(rootDir, 'data', 'favourite.json')

module.exports = class Favourite{

static addToFavourite(homeId, callback) {
      Favourite.getFavourites((favourites) => {
     if(favourites.includes(homeId)){
        callback("Home already in favourites")
     } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataFile, JSON.stringify(favourites))
    }
     })
}

static getFavourites(callback) {
    fs.readFile(favouriteDataFile, (err,data)=> {
        callback(!err ? JSON.parse(data): [])
      })
}
}