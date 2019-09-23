import { Router } from "express"

import disciplinaController from "./app/controllers/disciplinaController"

const routes = new Router()

//GET
routes.get("/disciplinas", disciplinaController.index)
//POST
routes.post("/disciplinas", disciplinaController.store)
//PUT
routes.put("/disciplinas/:id", disciplinaController.update)
//DELETE
routes.delete("/disciplinas/:id", disciplinaController.delete)

export default routes;