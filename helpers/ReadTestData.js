const fs = require("fs");

exports.ReadTestData = class ReadTestData {

    getTestData(clientName){
        try {
            const loginData = JSON.parse(fs.readFileSync("./testdata/users.json"))
            return loginData[clientName]
        } catch (error) {
            console.log("Error reading test data from users.json file" + error)
        }
    }
}