import mongoose from "mongoose"
import conn from "../config/dbConnection"

class dataBase {
    constructor() {
        this.mongo()
    }

    mongo() {
        this.mongoConnection = mongoose.connect(conn.url, {
            useNewUrlParser: true,
            useFindAndModify: true
        })
    }
}

export default new dataBase();