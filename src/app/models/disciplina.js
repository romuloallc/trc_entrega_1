import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

import conn from "../../config/dbConnection"

mongoose.connect(conn.url)
mongoose.set('useFindAndModify', false);
autoIncrement.initialize(mongoose)

const disciplinaSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    }
});

disciplinaSchema.plugin(autoIncrement.plugin, {
    model: "disciplina",
    field: "id",
    startAt: 1,
    incrementBy: 1
});

export default mongoose.model("disciplina", disciplinaSchema);